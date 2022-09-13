import { createGlobalStyle } from "styled-components";
import { resetCSS } from "./reset";
//import { Color } from "./colors";

export const GlobalStyles = createGlobalStyle`

${resetCSS}

* {
    margin:0px;
    padding:0px;
    box-sizing:0px;
}

body{
  background:white;
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button 
  {
    -webkit-appearance: none;
    margin: 0;
  };
  input[type="number"] {
    -moz-appearance: textfield;
  };
  input[type="number"]:hover,
  input[type="number"]:focus {
    -moz-appearance: number-input;
  };
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  };
  font-family:Arial, Helvetica, sans-serif;
}

`;
