import styled from "styled-components";
import { Media } from "ui/breakepoints";
import { Color } from "ui/colors";

type setOpen = { open: boolean };

const StyledNavbarList = styled.ul<setOpen>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: around-between;
  padding-top: 10px;
  li {
    padding-right: 20px;
    padding-bottom: 1.5rem;
    :hover{
    opacity: 0.7;
  }
  }

  ${Media.SM} {
    flex-flow: column nowrap;
    background-color: ${Color.PrimaryLight};
    position: fixed;
    transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 200vh;
    width: 150px;
    justify-content: flex-start;
    padding-top: 3rem;
    padding-left: 20px;
    color: ${Color.White};
    transition: transform 0.3s ease-in-out;
  }
`;

export { StyledNavbarList };
