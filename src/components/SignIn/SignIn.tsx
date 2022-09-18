import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { StyledSignIn } from "./styles";

export const SignIn = () => {
  return (
    <StyledSignIn>
      <Link to={ROUTE.SING_IN}>SignIn</Link>
    </StyledSignIn>
  );
};
