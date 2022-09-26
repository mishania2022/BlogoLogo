
import { ToggleTheme } from "components";
import { ExpDate, StyledFooter } from "./styles";
export const Footer = () => {
  return (
    <StyledFooter>
      <ExpDate>©2022 Blogologo</ExpDate>
      <ToggleTheme/>
    </StyledFooter>
  );
};
