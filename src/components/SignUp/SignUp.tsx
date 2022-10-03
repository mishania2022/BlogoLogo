import { SignUpIcon } from "assets";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { StyledSignUp } from "./styles";

export const SignUp = () => {
  return (
    <StyledSignUp>
      <Link to={ROUTE.SIGN_UP}><SignUpIcon/></Link>
    </StyledSignUp>
  );
};
