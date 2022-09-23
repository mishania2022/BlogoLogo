import styled from "styled-components";
import { Color } from "../../ui/colors";
import { RingLoader } from "react-spinners";
import { Link } from "react-router-dom";

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

const Danger = styled.p`
  color: ${Color.Error};
`;
const ExtraDanger = styled.p`
  color: ${Color.Error};
  font-weight: bold;
`;
const StyledRingLoader = styled(RingLoader)`
  margin: 0 auto;
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
export { Form, Button, Danger, ExtraDanger, StyledRingLoader, LinkSignIn, LinkRow };
