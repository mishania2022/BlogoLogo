import styled from "styled-components";
import { Media } from "../../ui/breakepoints";

const StyledBlogList = styled.div`
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
export { StyledBlogList };