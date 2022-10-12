import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchSortArticles } from "store/features/sortArticlesSlice/sortArticlesSlice";
import { getSortArticles } from "store/selectors/sortArticlesSelector";
import { getSortWord } from "store/selectors/sortWordSelectors";
import { fetchArticles } from "store/features/articlesSlice/articlesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getArticles } from "store/selectors/articleSelectors";
import { IArticle } from "types";
import { Article } from "../Article/Article";
import { StyledArticlesList, StyledClockLoader } from "./styles";

export const ArticlesList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, articles } = useAppSelector(getArticles);
  const { sortArticles } = useAppSelector(getSortArticles);
  const { sortWord } = useAppSelector(getSortWord);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSortArticles(sortWord));
  }, [dispatch, sortWord]);

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
      {sortArticles.length === 0
        ? articles.map((article: IArticle, index) => {
          return (
            <Link to={`/articles/${article.id}`}>
              <Article article={article} custom={index}/>
            </Link>
          );
        })
        : sortArticles.map((article: IArticle,index) => {
          return (
            <Link to={`/articles/${article.id}`}>
              <Article article={article} custom={index} />
            </Link>
          );
        })}
    </StyledArticlesList>
  );
};
