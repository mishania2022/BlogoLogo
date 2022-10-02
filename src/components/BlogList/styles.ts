import styled from "styled-components";
import { Media } from "../../ui/breakepoints";

const StyledBlogList = styled.ul`
  max-width: 1120px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
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
export { StyledBlogList };
