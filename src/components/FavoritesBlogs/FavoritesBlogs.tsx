import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { StyledSignIn } from "./styles";

export const FavoritesBlogs = () => {
  return (
    <StyledSignIn>
      <Link to={ROUTE.FAVORITES_BLOGS}>💛Blogs</Link>
    </StyledSignIn>
  );
};