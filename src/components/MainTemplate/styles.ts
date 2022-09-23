import styled from "styled-components";
import { Media } from "../../ui/breakepoints";
import { Color } from "../../ui/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  margin: 0 auto;
  background: ${Color.Gray};

  ${Media.MD} {
    max-width: 768px;
  }

  ${Media.SM} {
    max-width: 320px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 85vh;
  margin: 0 auto;
  width: 1120px;

  ${Media.MD} {
    max-width: 688px;
  }

  ${Media.SM} {
    max-width: 273px;
  }
`;

const Main = styled.div`
  flex-grow: 1;
`;
export { Wrapper, Container, Main };
