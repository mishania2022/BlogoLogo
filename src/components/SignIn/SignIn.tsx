import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { StyledSignIn, StyledSignInIcon } from "./styles";

export const SignIn = () => {
  return (
    <StyledSignIn>
      <Link to={ROUTE.SING_IN}><StyledSignInIcon/></Link>
    </StyledSignIn>
  );
};
