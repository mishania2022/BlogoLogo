import { useState } from "react";
import { TabBar, ArticlesList, BlogList, Pagination } from "components";

export const HomePage = () => {
  const [tab, setTab] = useState<"articles" | "blogs">("articles");

  return (
    <>
      <TabBar setActiveTab={setTab} />
      {tab === "articles" ? <ArticlesList /> : <BlogList />}
      <Pagination />
    </>
  );
};
