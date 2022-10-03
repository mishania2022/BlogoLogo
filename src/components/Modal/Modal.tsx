import { useNavigate } from "react-router-dom";
import { Portal, PortalTarget } from "../Portal/Portal";
import { Container, Description, StyledModal, Title, Button } from "./styles";

interface IProps {
  toggleModal: (value: boolean) => void;
}

export const Modal = ({ toggleModal }: IProps) => {
  const navigate = useNavigate();
  return (
    <Portal target={PortalTarget.MODAL}>
      <Container>
        <StyledModal>
          <Description>
            <Title>Congratulations you have successfully registered!</Title>
            <Button
              type="button"
              onClick={() => {
                toggleModal(false);
                navigate("/");
              }}
            >
              Got it
            </Button>
          </Description>
        </StyledModal>
      </Container>
    </Portal>
  );
};
