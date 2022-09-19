import { StyledLogoIcon } from "./styles";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";

export const LogoIcon = () => {
  return (
    <StyledLogoIcon>
      <Link to={ROUTE.HOME}>
        <Logo />
      </Link>
    </StyledLogoIcon>
  );
};
