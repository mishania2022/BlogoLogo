import { useState } from "react";
import { TabBar, ArticlesList, BlogList, Select } from "../../components";
import { Title } from "./styles";

export const HomePage = () => {
  const [tab, setTab] = useState<"articles" | "blogs">("articles");

  return (
    <div>
      <Title>Blog</Title>
      <Select/>
      <TabBar setActiveTab={setTab} />
      {tab === "articles" ? <ArticlesList /> : <BlogList />}
    </div>
  );
};
