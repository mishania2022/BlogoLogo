import styled from "styled-components";
import { Color } from "../../ui/colors";

type isDarkTheme = { $isDarkTheme: "dark" | "light" };

export const Button = styled.button<isDarkTheme>`
  height: 20px;
  padding: 5px;
  border-radius: 10px;
  border: none;
  background-color: ${({ $isDarkTheme }) =>
    $isDarkTheme === "dark" ? Color.Primary : Color.Gray};
  transition: all 0.3s;
`;
