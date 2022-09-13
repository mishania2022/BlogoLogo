import styled from "styled-components";

const StyledArticlesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 4fr);
  grid-gap: 40px 32px;
  list-style: none;
` ;

export { StyledArticlesList };