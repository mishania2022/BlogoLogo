import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { StyledSignIn } from "./styles";

export const Favorites = () => {
  return (
    <StyledSignIn>
      <Link to={ROUTE.FAVORITES}>Favorites</Link>
    </StyledSignIn>
  );
};