import { createGlobalStyle } from "styled-components";
import { resetCSS } from "./reset";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`

${resetCSS};
${theme};

body{  
  font-family:Arial, Helvetica, sans-serif;  
}
`;
