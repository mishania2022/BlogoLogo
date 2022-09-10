import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 32px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 85vh;
  margin: 0 auto;
  width: 1120px;
`;

const Main = styled.div`
  flex-grow: 1;
`;
export { Wrapper, Container, Main };
