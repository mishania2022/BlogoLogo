import { SignInIcon } from "assets";
import styled from "styled-components";
import { Color } from "ui/colors";
const StyledSignIn = styled.li`
  color: ${Color.Secondary};
`;

const StyledSignInIcon = styled(SignInIcon)`
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
`;

export { StyledSignIn, StyledSignInIcon };
