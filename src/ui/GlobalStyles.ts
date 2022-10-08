import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { resetCSS } from "./reset";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`

${resetCSS};
${theme};

/* #root[data-theme='light']{
    background-color:${Color.Gray};
  };

#root[data-theme='dark']{
  background-color:${Color.Secondary};
}; */

body{  
  font-family:Arial, Helvetica, sans-serif;  
}
`;
