import { Modal } from "components";
import { useState } from "react";
import { FormSignUp } from "components/FormSignUp/FormSignUp";
import { StyledSignUpPage } from "./styles";

export const SignUpPage = () => {
  const [isOpen, toggleModal] = useState(false);
  return (
    <StyledSignUpPage>
      <FormSignUp toggleModal={toggleModal} />
      {isOpen && <Modal toggleModal={toggleModal} />}
    </StyledSignUpPage>
  );
};
