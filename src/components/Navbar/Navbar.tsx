import { Burger } from "components";
import { Logo } from "../LogoIcon/LogoIcon";
import { StyledNavbar } from "./styles";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo />
      <Burger />
    </StyledNavbar>
  );
};
