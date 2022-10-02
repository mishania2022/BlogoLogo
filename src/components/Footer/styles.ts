import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 5fr 0.5fr;
  padding: 24px 0;
`;

const ExpDate = styled.h3`
  color: ${Color.Medium};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export { StyledFooter, ExpDate };