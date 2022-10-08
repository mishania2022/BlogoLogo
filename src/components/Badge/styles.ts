import { Link } from "react-router-dom";
import styled from "styled-components";
import { Media } from "ui/breakepoints";
import { Color } from "ui/colors";

const StyledLink = styled(Link)`
  color: ${Color.Secondary};
  ${Media.SM} {
    color: ${Color.White};
  }
`;

const StyledSignIn = styled.li`
  color: ${Color.Secondary};
`;

const Title = styled.h3`
  padding: 15px;
  border-radius: 10px;
  background-color: ${Color.Primary};
  color: #ffffff;
`;

export { StyledLink, Title, StyledSignIn };
