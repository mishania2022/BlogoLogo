import styled from "styled-components";
import { Media } from "ui/breakepoints";
import { Color } from "ui/colors";

type setOpen = { open: boolean };

const StyledBurger = styled.div<setOpen>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;
  display: none;
  ${Media.SM}{
    display: flex;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? `${Color.Gray}` : `${Color.Primary}`)};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export { StyledBurger };
