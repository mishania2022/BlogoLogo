import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchSearchArticles } from "store/features/searchArticlesSlice/searchArticlesSlice";
import { getSearchArticles } from "store/selectors/searchArticleSelectors";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { IArticle } from "types";
import { Article } from "../Article/Article";
import { StyledArticlesList, StyledClockLoader, StyledEmpty } from "./styles";

interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchArticlesList = ({ value }: IProps) => {
  const dispatch = useAppDispatch();
  const { isLoading, error, searchArticles } = useAppSelector(getSearchArticles);

  useEffect(() => {
    value !== "" ? dispatch(fetchSearchArticles(value)) : dispatch(fetchSearchArticles("@"));
  }, [dispatch, value]);

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

  return searchArticles.length === 0 ? (
    <StyledArticlesList>
      <StyledEmpty />
    </StyledArticlesList>
  ) : (
    <StyledArticlesList>
      {searchArticles.map((article: IArticle, index) => {
        return (
          <Link to={`/articles/${article.id}`}>
            <Article article={article} custom={index} />
          </Link>
        );
      })}
    </StyledArticlesList>
  );
};
