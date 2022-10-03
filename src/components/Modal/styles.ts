import styled from "styled-components";
import { Color } from "../../ui/colors";

const Container = styled.div`
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -300px;
  margin-top: -100px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 250px;
  padding: 30px 20px;
  background-color: ${Color.Gray};
  border-radius: 16px;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  font-size: 24px;
  font-weight: 800;
  color: ${Color.Secondary};
`;

const Button = styled.button`
  width: 50%;
  padding: 25px;
  background-color: ${Color.Primary};
  font-size: 16px;
  font-weight: 600;
  color: ${Color.White};
  border-radius: 12px;

  :hover,
  :active {
    opacity: 0.8;
  }
`;

export { Container, StyledModal, Description, Title, Button };
