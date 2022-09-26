import styled from "styled-components";
import { ClockLoader } from "react-spinners";
import { Media } from "../../ui/breakepoints";

const StyledArticlesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 40px 32px;
  list-style: none;

  ${Media.MD} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px 32px;
  }

  ${Media.SM} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledClockLoader = styled(ClockLoader)`
  grid-column-start: 2;
  margin: 0 auto;
  margin-top: 300px;
  ${Media.MD} {
    grid-column-start: 2;
    margin: 300px -50px;
  }
  ${Media.SM} {
    grid-column-start: 1;
  }
`;

export { StyledArticlesList, StyledClockLoader };
