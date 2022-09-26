import { FavoritesArticles, FavoritesBlogs, SearchIcon } from "../";
import { SignIn } from "../";
import { SignUp } from "../";
import { StyledNavbarList } from "./styles";

export const NavbarList = () => {
  return (
    <StyledNavbarList>
      <FavoritesArticles/>
      <FavoritesBlogs/>
      <SearchIcon />
      <SignIn />
      <SignUp />
    </StyledNavbarList>
  );
};
