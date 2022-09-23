import { useState } from "react";
import { TabBar, ArticlesList, BlogList } from "../../components";
import { Title } from "./styles";

export const HomePage = () => {
  const [tab, setTab] = useState<"articles" | "blogs">("articles");

  return (
    <div>
      <Title>Blog</Title>
      <TabBar setActiveTab={setTab} />
      {tab === "articles" ? <ArticlesList /> : <BlogList />}
    </div>
  );
};
