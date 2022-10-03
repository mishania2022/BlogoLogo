import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { fetchSignInUser } from "store/features/userSlice/userSlice";
import { useAppDispatch } from "store/hooks";
import { Label } from "../Label/Label";
import { Button, Danger, ExtraDanger, Form, LinkRow, LinkSignIn, StyledRingLoader } from "./styles";

type SignUpValues = {
  email: string;
  password: string;
};

interface IProps {
  toggleModal: (value: boolean) => void;
}

export const FormSignUp = ({ toggleModal }: IProps) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpValues>();

  const onSubmit: SubmitHandler<SignUpValues> = (userInfo) => {
    setIsLoading(true);
    dispatch(fetchSignInUser(userInfo))
      .then(() => {
        toggleModal(true);
      })
      .finally(() => {
        reset();
      });
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
      {errors.email && <Danger>{errors.email.message}</Danger>}
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
      {errors.password && <Danger>{errors.password.message}</Danger>}
      {errorMessage && <ExtraDanger>{errorMessage}</ExtraDanger>}
      <br></br>
      <Button type="submit">Sign Up {isLoading && <StyledRingLoader color="#d3d636" />}</Button>
      <LinkRow>
        Already have an account? <LinkSignIn to="/sign-in">Sign in</LinkSignIn>
      </LinkRow>
    </Form>
  );
};
