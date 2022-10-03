import { StyledLogoIcon } from "./styles";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { LogoIcon } from "assets";

export const Logo = () => {
  return (
    <StyledLogoIcon>
      <Link to={ROUTE.HOME}>
        <LogoIcon />
      </Link>
    </StyledLogoIcon>
  );
};
