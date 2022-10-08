import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return { theme, setTheme };
};