import { Input } from "components/Input/Input";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { fetchSignInUser } from "store/features/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { StyledRingLoader } from "../FormSignUp/styles";
import { Button, Form, LinkRow, LinkSignIn } from "./styles";

type SignInValues = {
  email: string;
  password: string;
};

const validateRules = {
  password: {
    required: "Password is required !",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters",
    },
    maxLength: {
      value: 12,
      message: "Password must be at most 20 characters",
    },
  },
  email: {
    required: "Email is required !",
    pattern: {
      value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: "Please enter a valid email",
    },
  },
};

export const FormSignIn = () => {
  const { isPendingAuth } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInValues>({ defaultValues: { email: "", password: "" } });

  const onSubmit: SubmitHandler<SignInValues> = (userInfo) => {
    dispatch(fetchSignInUser(userInfo))
      .then((_) => {
        navigate("/");
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      Email:
      <Controller
        name="email"
        control={control}
        rules={validateRules.email}
        render={({ field: { value, onChange } }) => {
          return <Input value={value} onChange={onChange} type="text" placeholder="Your email" />;
        }}
      />
      {errors.email && <p className="text-danger">{errors.email.message}</p>}
      Password:
      <Controller
        name="password"
        control={control}
        rules={validateRules.password}
        render={({ field: { value, onChange } }) => {
          return (
            <Input value={value} onChange={onChange} type="password" placeholder="Your password" />
          );
        }}
      />
      {errors.password && <p className="text-danger">{errors.password.message}</p>}
      <Link to="/sign-up">Forgot password?</Link>
      <Button type="submit">Sign In {isPendingAuth && <StyledRingLoader color="#ffffff" />}</Button>
      <LinkRow>
        Don`t have an account? <LinkSignIn to="/sign-up">Sign Up</LinkSignIn>
      </LinkRow>
    </Form>
  );
};
