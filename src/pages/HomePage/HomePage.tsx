import { useState } from "react";
import { TabBar, ArticlesList, BlogList } from "../../components";

export const HomePage = () => {
  const [tab, setTab] = useState<"articles" | "blogs">("articles");

  return (
    <div>
      <TabBar setActiveTab={setTab} />
      {tab === "articles" ? <ArticlesList /> : <BlogList />}
    </div>
  );
};
