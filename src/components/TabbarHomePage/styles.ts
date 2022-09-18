import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledTabbarHomePage = styled.div`
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
  box-shadow: 10px 5px 5px ${Color.Secondary};
`;

export { StyledTabbarHomePage, ButtonTab };
