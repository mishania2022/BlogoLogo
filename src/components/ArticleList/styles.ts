import styled from "styled-components";
import { ClockLoader } from "react-spinners";

const StyledArticlesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 4fr);
  grid-gap: 40px 32px;
  list-style: none;
`;

const StyledClockLoader = styled(ClockLoader)`
  margin: 0 auto;
  margin-top: 300px;
`;

export { StyledArticlesList, StyledClockLoader };
