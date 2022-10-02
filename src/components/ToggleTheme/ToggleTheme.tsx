import { useState } from "react";
import { Button } from "./styles";

export const ToggleTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const root = document.getElementById("root") as HTMLElement;
  root.setAttribute("data-theme", theme);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button type="button" onClick={toggleTheme} isTheme={theme}>
      {theme === "light" ? "set dark" : "set light"}
    </Button>
  );
};
