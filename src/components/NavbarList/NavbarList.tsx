import { SearchIcon } from "../SearchIcon/SearchIcon"
import { SignInStack } from "../SignInStack/SignInStack"
import { StyledNavbarList } from "./styles"

export const NavbarList = () => {
  return (
    <StyledNavbarList>
      <SearchIcon/>
      <SignInStack/>
    </StyledNavbarList>
  )
}
