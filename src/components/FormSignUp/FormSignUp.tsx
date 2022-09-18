import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { getFirebaseMessage } from "../../utils/firebaseErrors";
import { Label } from "../Label/Label";
import { Button, Danger, ExtraDanger, Form, LinkSignIn, StyledRingLoader } from "./styles";

type SignUpValues = {
    email: string;
    password: string;
};

export const FormSignUp = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<SignUpValues>();

    const onSubmit: SubmitHandler<SignUpValues> = ({ email, password }) => {

        setIsLoading(true);
        setErrorMessage(null);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {

                navigate("/");
            })
            .catch(err => {
                setErrorMessage(getFirebaseMessage(err.code));
            })
            .finally(() => {
                setIsLoading(true);
            });
        reset();
    };

    return (
        <Form
            onSubmit={handleSubmit(onSubmit)}
        >
            Email:
            <Label type="text" placeholder="Your email" register={{
                ...register("email", {
                    required: "Email is required"
                })
            }} />
            {errors.email && (
                <Danger>{errors.email.message}</Danger>
            )}
            Password:
            <Label type="password" placeholder="Your password" register={{
                ...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 6,
                        message: "Password must contain six symbols",
                    },
                })
            }} />

            {errors.password && (
                <Danger >{errors.password.message}</Danger>
            )}

            {errorMessage && (
                <ExtraDanger >{errorMessage}</ExtraDanger>
            )}
            <br></br>
            <Button type="submit">
                Sign Up{" "}
                {isLoading && (<StyledRingLoader color="#d3d636" />)
                }
            </Button>
            <LinkSignIn>
                Already have an account? <Link to="/sign-in">Sign in</Link>
            </LinkSignIn>
        </Form>
    );
};
