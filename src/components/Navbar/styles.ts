import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledNavbar = styled.nav`
  height: 96px;
  width: 100%;
  margin-bottom: 192px;
  padding: 20px 32px;
  display: grid;
  grid-template-columns: 1fr 6fr 3fr;
  background: ${Color.White};
`;

export { StyledNavbar };
