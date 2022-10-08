import styled from "styled-components";
import { Color } from "ui/colors";

const StyledSearchInput = styled.input`
  width: 100%;
  height: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 30px 0 10px;
  padding: 20px;
  background: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${Color.Primary};
  border-radius: 10px;
  border: none;
  &::placeholder {
    color: ${Color.Secondary};
  }
`;

export { StyledSearchInput };