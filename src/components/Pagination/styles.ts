import styled from "styled-components";
import { Color } from "ui/colors";

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 15px;
`;

const ButtonPag = styled.button`
  font-size: 16px;
  line-height: 24px;
  padding: 10px 10px;
  margin-right: 10px;
  background: ${Color.Gray};
  border: none;
  border-radius: 4px;
  color: ${Color.Secondary};
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  :hover {
    background: ${Color.White};
    :active {
      background: ${Color.PrimaryLight};
    }
  }
`;

export { StyledPagination, ButtonPag };
