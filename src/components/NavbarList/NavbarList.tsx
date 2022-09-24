import { SearchIcon } from "../";
import { SignIn } from "../";
import { SignUp } from "../";
import { Favorites } from "../Favorites/Favorites";
import { StyledNavbarList } from "./styles";

export const NavbarList = () => {
  return (
    <StyledNavbarList>
      <Favorites/>
      <SearchIcon />
      <SignIn />
      <SignUp />
    </StyledNavbarList>
  );
};
