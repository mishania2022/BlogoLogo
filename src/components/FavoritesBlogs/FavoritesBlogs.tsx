import { ROUTE } from "../../routes";
import { StyledLink, StyledSignIn } from "./styles";

export const FavoritesBlogs = () => {
  return (
    <StyledSignIn>
      <StyledLink to={ROUTE.FAVORITES_BLOGS}>💛Blogs</StyledLink>
    </StyledSignIn>
  );
};
