import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledNavbar = styled.nav`
  display: flex;
  width: 100%;
  height: 96px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  margin-bottom: 80px;
  padding: 40px 32px;
  justify-content: space-between;
  background: ${Color.White};
`;

export { StyledNavbar };
