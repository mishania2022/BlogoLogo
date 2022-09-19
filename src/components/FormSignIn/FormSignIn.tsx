import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { getFirebaseMessage } from "../../utils/firebaseErrors";
import { StyledRingLoader } from "../FormSignUp/styles";
import { Label } from "../Label/Label";
import { Button, Form, LinkSignIn } from "./styles";

type SignInValues = {
  email: string;
  password: string;
};

export const FormSignIn = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInValues>();

  const onSubmit: SubmitHandler<SignInValues> = ({ email, password }) => {
    setIsLoading(true);
    setErrorMessage(null);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((err) => {
        setErrorMessage(getFirebaseMessage(err.code));
      })
      .finally(() => {
        setIsLoading(false);
      });
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      Email:
      <Label
        type="text"
        placeholder="Your email"
        register={{
          ...register("email", {
            required: "Email is required",
          }),
        }}
      />
      {errors.email && <p className="text-danger">{errors.email.message}</p>}
      Password:
      <Label
        type="password"
        placeholder="Your password"
        register={{
          ...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must contain six symbols",
            },
          }),
        }}
      />
      {errors.password && <p className="text-danger">{errors.password.message}</p>}
      <p>Forgot password?</p>
      {errorMessage && <p className="text-danger font-bold">{errorMessage}</p>}
      <Button type="submit">Sign In {isLoading && <StyledRingLoader color="#d3d636" />}</Button>
      <LinkSignIn>
        Dont have an account? <Link to="/sign-up">Sign Up</Link>
      </LinkSignIn>
    </Form>
  );
};
