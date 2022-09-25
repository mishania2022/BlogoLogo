import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchArticles } from "../../store/features/Articles/articlesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getArticles } from "../../store/selectors/articleSelectors";
import { IArticle } from "../../types";
import { Article } from "../Article/Article";
import { StyledArticlesList, StyledClockLoader } from "./styles";

export const ArticlesList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, articles } = useAppSelector(getArticles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  if (isLoading) {
    return (
      <StyledArticlesList>
        <StyledClockLoader />
      </StyledArticlesList>
    );
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <StyledArticlesList>
      {articles.map((article: IArticle) => {
        return (
          <Link to={`/articles/${article.id}`}>
            <Article article={article} />
          </Link>
        );
      })}
    </StyledArticlesList>
  );
};
