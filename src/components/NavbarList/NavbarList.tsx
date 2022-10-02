import { FavoritesArticles, FavoritesBlogs, SearchIcon } from "../";
import { SignIn } from "../";
import { SignUp } from "../";
import { StyledNavbarList } from "./styles";

interface IProps {
  open: boolean;
}
export const NavbarList = ({ open }: IProps) => {
  return (
    <StyledNavbarList open={open}>
      <FavoritesArticles />
      <FavoritesBlogs />
      <SearchIcon />
      <SignIn />
      <SignUp />
    </StyledNavbarList>
  );
};
