import styled from "styled-components";
import { Color } from "../../ui/colors";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 624px;
  padding: 40px;
  gap: 40px;
`;

const Button = styled.button`
  background: ${Color.Primary};
  color: ${Color.White};
  padding: 16px 0;
`;
const Input = styled.input`
  padding: 16px 0;
  width: 100%;
  border: 1px solid ${Color.Gray};
`;
const LinkSignIn = styled.p`
  color: ${Color.Primary};
`;
export { Form, Button, Input, LinkSignIn };
