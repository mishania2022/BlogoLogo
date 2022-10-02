import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledTabBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 64px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${Color.Light};
`;

const TabGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
type setTab = { active: true | false };

const ButtonArticleTab = styled.button<setTab>`
  font-size: 16px;
  line-height: 24px;
  padding: 10px 10px;
  margin-right: 10px;
  background: ${({ active }) => (active === false ? Color.Primary : Color.Gray)};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const ButtonBlogTab = styled.button<setTab>`
  font-size: 16px;
  line-height: 24px;
  padding: 10px 10px;
  margin-right: 10px;
  background: ${({ active }) => (active === true ? Color.Primary : Color.Gray)};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export { StyledTabBar, ButtonArticleTab, TabGroup, ButtonBlogTab };
