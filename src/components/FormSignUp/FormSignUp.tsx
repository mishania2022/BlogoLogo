import { Input } from "components";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { fetchSignUpUser } from "store/features/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import {
  Button,
  Danger,
  ExtraDanger,
  StyledForm,
  LinkRow,
  LinkSignIn,
  StyledRingLoader,
  Title,
} from "./styles";

type SignUpValues = {
  userName: string;
  userSurname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const validateRules = {
  name: {
    required: "Name is required !",
    pattern: {
      value: /[A-Za-z]/,
      message: "Name must contain only letters",
    },
  },
  surname: {
    required: "Name is required !",
    pattern: {
      value: /[A-Za-z]/,
      message: "Name must contain only letters",
    },
  },
  password: {
    required: "Password is required !",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters",
    },
    maxLength: {
      value: 12,
      message: "Password must be at most 12 characters",
    },
  },
  confirmPassword: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must have 6 symbols",
    },
    maxLength: {
      value: 12,
      message: "Password must be at most 12 characters",
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

interface IProps {
  toggleModal: (value: boolean) => void;
}

export const FormSignUp = ({ toggleModal }: IProps) => {
  const { isPendingAuth, error } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<SignUpValues>({
    defaultValues: { email: "", password: "", userName: "", userSurname: "" },
  });

  const onSubmit: SubmitHandler<SignUpValues> = (userInfo) => {
    dispatch(fetchSignUpUser(userInfo))
      .then(() => {
        toggleModal(true);
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Name:</Title>
      <Controller
        name="userName"
        control={control}
        rules={validateRules.name}
        render={({ field: { value, onChange } }) => {
          return <Input onChange={onChange} value={value} placeholder="Your name" type="text" />;
        }}
      />
      {errors.userName && <Danger>{errors.userName.message}</Danger>}
      <Title>Surname:</Title>
      <Controller
        name="userSurname"
        control={control}
        rules={validateRules.surname}
        render={({ field: { value, onChange } }) => {
          return <Input onChange={onChange} value={value} placeholder="Your surname" type="text" />;
        }}
      />
      {errors.userSurname && <Danger>{errors.userSurname.message}</Danger>}
      <Title>Email:</Title>
      <Controller
        name="email"
        control={control}
        rules={validateRules.email}
        render={({ field: { onChange, value } }) => {
          return <Input type="text" onChange={onChange} value={value} placeholder="Your email" />;
        }}
      />
      {errors.email && <Danger>{errors.email.message}</Danger>}
      <Title>Password:</Title>
      <Controller
        name="password"
        control={control}
        rules={validateRules.password}
        render={({ field: { onChange, value } }) => {
          return (
            <Input onChange={onChange} type="password" placeholder="Your password" value={value} />
          );
        }}
      />
      {errors.password && <Danger>{errors.password.message}</Danger>}
      <Title>Confirm Password</Title>
      <Controller
        control={control}
        name="confirmPassword"
        rules={validateRules.confirmPassword}
        render={({ field: { onChange, value } }) => (
          <Input
            onChange={onChange}
            value={value}
            placeholder="Confirm Your password"
            type="password"
          />
        )}
      />
      {errors.confirmPassword && <ExtraDanger>{errors.confirmPassword.message}</ExtraDanger>}
      <br></br>
      {error && <Danger>{error}</Danger>}
      <Button type="submit">Sign Up {isPendingAuth && <StyledRingLoader color="#d3d636" />}</Button>
      <LinkRow>
        Already have an account? <LinkSignIn to="/sign-in">Sign in</LinkSignIn>
      </LinkRow>
    </StyledForm>
  );
};
