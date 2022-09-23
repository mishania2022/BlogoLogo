import styled from "styled-components";
import { ClockLoader } from "react-spinners";
import { Media } from "../../ui/breakepoints";

const StyledArticlesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  margin: 0 auto;
  margin-top: 300px;
`;

export { StyledArticlesList, StyledClockLoader };
