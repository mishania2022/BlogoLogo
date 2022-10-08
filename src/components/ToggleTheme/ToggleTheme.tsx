import { useTheme } from "hooks/useTheme";
import { Button } from "./styles";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button type="button" onClick={toggleTheme} isTheme={theme}>
      {theme === "light" ? "dark" : "light"}
    </Button>
  );
};
