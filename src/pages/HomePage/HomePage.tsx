import { useState } from "react";
import { ArticlesList } from "../../components";
import { BlogList } from "../../components/BlogList/BlogList";
import { TabbarHomePage } from "../../components/TabbarHomePage/TabbarHomePage";
import { Title } from "./styles";

export const HomePage = () => {
  const [tab, setTab] = useState("articles");

  return (
    <div>
      <Title>Blog</Title>
      <TabbarHomePage tab={tab} setTab={setTab} />
      {tab === "articles" ? <ArticlesList /> : <BlogList />}
    </div>
  );
};
