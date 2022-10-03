import { ROUTE } from "routes";
import { StyledLink, StyledSignIn } from "./styles";

export const FavoritesArticles = () => {
  return (
    <StyledSignIn>
      <StyledLink to={ROUTE.FAVORITES_ARTICLES}> 🧡Articles</StyledLink>
    </StyledSignIn>
  );
};
