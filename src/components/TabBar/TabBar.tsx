import { CustomSelect } from "components/CustomSelect/CustomSelect";
import { useToggle } from "hooks/useToggle";
import { StyledTabBar, TabGroup, ButtonArticleTab, ButtonBlogTab } from "./styles";

interface IProps {
  setActiveTab: React.Dispatch<React.SetStateAction<"articles" | "blogs">>;
}

export const TabBar = ({ setActiveTab }: IProps) => {
  const [isTabActive, toggleIsTabActive] = useToggle();
  return (
    <StyledTabBar>
      <TabGroup>
        <ButtonArticleTab
          onClick={() => {
            setActiveTab("articles");
            toggleIsTabActive();
          }}
          active={isTabActive}
        >
          Articles
        </ButtonArticleTab>
        <ButtonBlogTab
          onClick={() => {
            setActiveTab("blogs");
            toggleIsTabActive();
          }}
          active={isTabActive}
        >
          Blogs
        </ButtonBlogTab>
      </TabGroup>
      <CustomSelect />
    </StyledTabBar>
  );
};
