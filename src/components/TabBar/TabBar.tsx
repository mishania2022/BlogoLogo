import { Select } from "components/Select/Select";
import { StyledTabBar, ButtonTab } from "./styles";

interface IProps {
  setActiveTab: React.Dispatch<React.SetStateAction<"articles" | "blogs">>;
}

export const TabBar = ({ setActiveTab }: IProps) => {
  return (
    <StyledTabBar>
      <ButtonTab
        onClick={() => {
          setActiveTab("articles");
        }}
      >
        Articles
      </ButtonTab>
      <ButtonTab
        onClick={() => {
          setActiveTab("blogs");
        }}
      >
        Blogs
      </ButtonTab>
      <Select/>
    </StyledTabBar>
  );
};
