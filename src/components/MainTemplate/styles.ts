import styled from "styled-components";
import { Media } from "../../ui/breakepoints";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: inherit;
`;

const Container = styled.cite`
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  min-height: 85vh;
  margin: 0 auto;
  margin-top: 90px;
  padding: 0 32px;

  ${Media.MD} {
    max-width: 686px;
  }

  ${Media.SM} {
    max-width: 320px;
  }
`;

const Main = styled.main`
  flex-grow: 1;
`;

export { Wrapper, Container, Main };
