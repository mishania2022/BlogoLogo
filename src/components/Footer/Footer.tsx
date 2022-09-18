import { ExpDate, ToggleTheme, StyledFooter } from "./styles";

export const Footer = () => {
  return (
    <div>
      <StyledFooter>
        <ExpDate>©2022 Blogologo</ExpDate>
        <ToggleTheme>Dark theme</ToggleTheme>
      </StyledFooter>
    </div>
  );
};
