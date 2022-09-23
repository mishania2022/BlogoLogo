import { StyledLogoIcon } from "./styles";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { Logo } from "../../assets";

export const LogoIcon = () => {
  return (
    <StyledLogoIcon>
      <Link to={ROUTE.HOME}>
        <Logo />
      </Link>
    </StyledLogoIcon>
  );
};
