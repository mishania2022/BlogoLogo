import styled from "styled-components";
import { Color } from "ui/colors";

const StyledForm = styled.form`
  float: right;
  width: 20%;
  height: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  background: ${Color.White};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${Color.Primary};
  border-radius: 10px;
  border: none;
`;
const StyledSelect = styled.select`
  width: 100%;
  color: ${Color.Medium};
  border: none;
`;

export { StyledForm, StyledSelect };
