import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleByDetails } from "../../store/features/articlesDetails/articlesDetailsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getDetailsArticles } from "../../store/selectors/articleDetailsSelectors";
import { IArticle } from "../../types";
import { StyledDetailArticlesPage, Image, NewsSite, Title, Description } from "./styles";

export const DetailArticlesPage = () => {
  const { id = "" } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, error, details } = useAppSelector(getDetailsArticles);
  const { title, newsSite, imageUrl, summary } = details || ({} as IArticle);

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
      <NewsSite>{newsSite}</NewsSite>
      <Image src={imageUrl} alt="image" />
      <Title>Title: {title}</Title>
      <Description>Description: {summary}</Description>
    </StyledDetailArticlesPage>
  );
};
