import { Link } from "react-router-dom";
import styled from "styled-components";
import { Media } from "ui/breakepoints";
import { Color } from "ui/colors";

const StyledSignIn = styled.li``;

const StyledLink = styled(Link)`
  color: black;
  ${Media.SM} {
    color: ${Color.White};
  }
`;

export { StyledSignIn, StyledLink };
