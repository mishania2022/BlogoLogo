import styled from "styled-components";
import { ClockLoader } from "react-spinners";
import { Media } from "../../ui/breakepoints";

const StyledBlogsList = styled.ul`
  max-width: 1120px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px 32px;
  list-style: none;

  ${Media.MD} {
    max-width: 686px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px 32px;
  }

  ${Media.SM} {
    max-width: 272px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledClockLoader = styled(ClockLoader)`
  width: 1120px;
  grid-column-start: 2;
  margin: 0 auto;
  margin: 300px 300px;
  ${Media.MD} {
    grid-column-start: 2;
  }
  ${Media.SM} {
    grid-column-start: 1;
  }
`;
const StyledEmpty = styled.h1`
  width: 1120px;
  grid-column-start: 2;
  margin: 0 auto;
  margin: 300px 300px;
  ${Media.MD} {
    grid-column-start: 2;
  }
  ${Media.SM} {
    grid-column-start: 1;
  }
`;
export { StyledBlogsList, StyledClockLoader, StyledEmpty };
