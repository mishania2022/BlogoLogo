import styled from "styled-components";
import { Color } from "../../ui/colors";
import { RingLoader } from "react-spinners";

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


const Danger = styled.p`
  color:${Color.Error}
`
const ExtraDanger = styled.p`
  color:${Color.Error};
  font-weight:bold;
`
const StyledRingLoader = styled(RingLoader)`
  margin:0 auto;  
`
const LinkSignIn = styled.p`
  color:${Color.Primary};
`
export { Form, Button, Danger, ExtraDanger, StyledRingLoader, LinkSignIn };