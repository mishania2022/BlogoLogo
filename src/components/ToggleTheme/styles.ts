import styled from "styled-components";
import { Media } from "ui/breakepoints";
import { Color } from "../../ui/colors";

type setTheme = { isTheme: "dark" | "light" };

export const Button = styled.button<setTheme>`
  height: 30px;
  padding: 4px 5px;
  grid-column-start: 3;
  grid-column-end: 4;
  border-radius: 10px;
  border: none;
  font-size: 13px;
  line-height: 15px;
  color: ${({ isTheme }) => (isTheme === "dark" ? Color.Secondary : Color.Gray)};
  transition: all 0.3s;
  background-color: ${({ isTheme }) => (isTheme === "light" ? Color.Primary : Color.Gray)};
  transition: all 0.3s;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    background: ${Color.PrimaryLight};
  }

  ${Media.MD} {
    height: 45px;
    padding: 10px 10px;
    font-size: 12px;
    line-height: 14px;
  }
  ${Media.SM} {
    height: 40px;
    padding: 10px 10px;
    font-size: 12px;
    line-height: 14px;
  }
`;
