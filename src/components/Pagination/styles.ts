import styled from "styled-components";
import { Color } from "ui/colors";

type setCurrent = { current: number };

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px 15px;
`;

const ListPag = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;

  li {
    font-size: 20px;
    font-weight: 600;
    color: #000000;
  }
`;

const ButtonPag = styled.button`
  font-size: 16px;
  line-height: 24px;
  padding: 10px 10px;
  margin-right: 10px;
  background: ${Color.Light};
  border: none;
  border-radius: 4px;
  color: #000000;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  :hover {
    background: ${Color.White};
    :active {
      background: ${Color.PrimaryLight};
    }
  }
`;

const Button = styled.button`
  height: 30px;
  padding: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 6px;
  border: none;
  background-color: ${Color.ExtraLight};
  color: inherit;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  :hover {
    opacity: 0.8;
    :active {
      background: ${Color.PrimaryLight};
    }
  }
`;
const CurrentButton = styled(Button)`
  background: ${Color.PrimaryLight};
`;

const FirstPage = styled.li``;

const FirstLi = styled.li<setCurrent>`
  display: ${({ current }) => (current <= 1 ? "none" : "block")};
`;

const SecondLi = styled.li<setCurrent>`
  display: ${({ current }) => (current <= 2 ? "none" : "block")};
`;
const ThirdLi = styled.li<setCurrent>`
  display: ${({ current }) => (current >= 1209 ? "none" : "block")};
`;
const FourthLi = styled.li<setCurrent>`
  display: ${({ current }) => (current >= 1208 ? "none" : "block")};
`;
export {
  StyledPagination,
  ButtonPag,
  ListPag,
  Button,
  CurrentButton,
  FirstPage,
  SecondLi,
  FirstLi,
  ThirdLi,
  FourthLi,
};
