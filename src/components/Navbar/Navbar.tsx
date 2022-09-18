import { LogoIcon } from '../LogoIcon/LogoIcon'
import { NavbarList } from '../'
import { StyledNavbar } from './styles'

export const Navbar = () => {
  return (
    <StyledNavbar>
      <LogoIcon />
      <NavbarList />
    </StyledNavbar>
  )
}
