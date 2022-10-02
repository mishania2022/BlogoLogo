import { SearchArticlesList, SearchBlogsList, SearchInput, TabBar } from "components";
import { useInput } from "hooks/useInput";
import { useState } from "react";
export const SearchPage = () => {
  const [tab, setTab] = useState<"articles" | "blogs">("articles");
  const searchArticlesInput = useInput();
  const searchBlogsInput = useInput();

  return (
    <>
      <TabBar setActiveTab={setTab} />
      {tab === "articles" ? (
        <>
          <SearchInput {...searchArticlesInput} />
          <SearchArticlesList {...searchArticlesInput} />
        </>
      ) : (
        <>
          <SearchInput {...searchBlogsInput} />
          <SearchBlogsList {...searchBlogsInput} />
        </>
      )}
    </>
  );
};
