import { css } from "styled-components";

export const theme = css`
  html[data-theme="light"] {
    --primary: #6c1bdb;
    --primaryLight: #912ef2;
    --secondary: #313037;
    --medium: #31303780;
    --light: #3130374d;
    --extraLight: #3130371a;
    --error: #fd3419;
    --white: #ffffff;
    --gray: #f3f3f3;
  }

  html[data-theme="dark"] {
    --primary: #6c1bdb;
    --primaryLight: #912ef2;
    --secondary: #ffffff;
    --medium: #FFFFFF;
    --light: #c1c1c3;
    --extraLight: #ffffff;
    --error: #fd3419;
    --white: #4c4d4d;
    --gray: #313037;
  }
`;
