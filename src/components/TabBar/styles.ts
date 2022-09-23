import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledTabBar = styled.div`
  margin-top: 40px;
  margin-bottom: 64px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${Color.Light};
`;

const ButtonTab = styled.button`
  font-size: 16px;
  line-height: 24px;
  padding: 10px 10px;
  margin-right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export { StyledTabBar, ButtonTab };
