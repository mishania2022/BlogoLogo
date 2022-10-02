import { ToggleTheme } from "components/ToggleTheme/ToggleTheme";
import { ExpDate, StyledFooter } from "./styles";
export const Footer = () => {
  return (
    <StyledFooter>
      <ExpDate>©2022 Blogologo</ExpDate>
      <ToggleTheme />
    </StyledFooter>
  );
};
