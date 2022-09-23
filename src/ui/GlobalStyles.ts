import { createGlobalStyle } from "styled-components";
import { resetCSS } from "./reset";

export const GlobalStyles = createGlobalStyle`

${resetCSS}

body{  
  font-family:Arial, Helvetica, sans-serif;
}
`;
