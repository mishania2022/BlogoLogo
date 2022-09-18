import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { fetchArticleByDetails } from "../../store/features/Articles/articlesDetailsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getDetailsArticles } from "../../store/selectors/articleDetailsSelectors";
import { IArticle } from "../../types";
import { StyledDetailArticlesPage } from "./styles";

export const DetailArticlesPage = () => {
  const { id = "" } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, error, details } = useAppSelector(getDetailsArticles);
  const {
    title,
    newsSite,
    imageUrl,
    summary,
  } = details || ({} as IArticle);

  useEffect(() => {
    dispatch(fetchArticleByDetails(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <StyledDetailArticlesPage>
      <h1>{newsSite}</h1>
      <img src={imageUrl} alt="image" />
      <h2>Title: {title}</h2>
      <h2>Description: {summary}</h2>
    </StyledDetailArticlesPage>
  );
}
