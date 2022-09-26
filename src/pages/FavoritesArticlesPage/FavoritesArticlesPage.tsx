/* eslint-disable max-len */
import { Link } from "react-router-dom";
import { getFavoritesArticles } from "store/selectors/articleFavoritesSelectors";
import { removeFavorite } from "../../store/features/favoritesArticlesSlice/favoritesArticlesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  ArticleItem,
  Button,
  Data,
  Description,
  StyledBasket,
  StyledFavoritesPage,
  Title,
} from "./styles";

export const FavoritesArticlesPage = () => {
  const dispatch = useAppDispatch();
  const { favoritesArticles } = useAppSelector(getFavoritesArticles);
  return (
    <StyledFavoritesPage>
      {favoritesArticles.map((article) => {
        return (
          <ArticleItem>
            <Link to={`/articles/${article.id}`}>
              <img src={article.imageUrl} alt="image" width="100%" height="200px" />
              <Title>Title: {article.title}</Title>
              <div className="d-flex justify-content-between">
                <Description>NewsSite: {article.newsSite}</Description>
                <Data>Data: {article.publishedAt}</Data>
                <Button
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch(removeFavorite(article.id));
                  }}
                >
                  <StyledBasket />
                </Button>
              </div>
            </Link>
          </ArticleItem>
        );
      })}
    </StyledFavoritesPage>
  );
};
