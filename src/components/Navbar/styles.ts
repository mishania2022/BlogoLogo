import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledNavbar = styled.nav`
  height: 96px;
  width: 100%;
  padding: 20px 32px;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  background: ${Color.White};
`;

export { StyledNavbar };
