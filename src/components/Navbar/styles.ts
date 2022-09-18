import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledNavbar = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  background: ${Color.White};
  padding: 20px;
`;

export { StyledNavbar };
