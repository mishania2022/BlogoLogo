import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../ui/colors";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 624px;
  margin-top: 100px;
  padding: 40px;
  gap: 15px;
`;

const Button = styled.button`
  background: ${Color.Primary};
  color: ${Color.White};
  padding: 16px 0;
  cursor: pointer;

  :hover {
    background-color: ${Color.Secondary};
  }
  :active {
    background-color: ${Color.PrimaryLight};
  }
`;
const Input = styled.input`
  padding: 16px 0;
  width: 100%;
  border: 1px solid ${Color.Gray};
`;
const LinkRow = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #8d8e97;
`;
const LinkSignIn = styled(Link)`
  color: ${Color.Primary};
`;
export { Form, Button, Input, LinkSignIn, LinkRow };
