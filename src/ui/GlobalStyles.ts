import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { resetCSS } from "./reset";

export const GlobalStyles = createGlobalStyle`

${resetCSS};

#root[data-theme='light']{
    background-color:${Color.Gray};
  };

#root[data-theme='dark']{
  background-color:${Color.Secondary};
};

body{  
  font-family:Arial, Helvetica, sans-serif;  
}
`;
