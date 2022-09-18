import { SearchIcon } from "../"
import { SignIn } from "../"
import { SignUp } from "../"
import { StyledNavbarList } from "./styles"

export const NavbarList = () => {
  return (
    <StyledNavbarList>
      <SearchIcon/>
      <SignIn/>
      <SignUp/>
    </StyledNavbarList>
  )
}
