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
    <div>
      <Button type="button" onClick={toggleTheme} $isDarkTheme={theme}>
        Dark theme
      </Button>
    </div>
  );
};
