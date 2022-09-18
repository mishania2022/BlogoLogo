import { StyledTabbarHomePage, ButtonTab } from "./styles";

export const TabbarHomePage = ({ setTab }: any) => {
  return (
    <StyledTabbarHomePage>
      <ButtonTab
        onClick={() => {
          setTab("articles");
        }}
      >
        Articles
      </ButtonTab>
      <ButtonTab
        onClick={() => {
          setTab("blogs");
        }}
      >
        Blogs
      </ButtonTab>
    </StyledTabbarHomePage>
  );
};