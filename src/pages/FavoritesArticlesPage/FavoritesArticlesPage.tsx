/* eslint-disable max-len */
import { CloseIcon } from "assets";
import { Link } from "react-router-dom";
import { getFavoritesArticles } from "store/selectors/articleFavoritesSelectors";
import { removeFavorite } from "store/features/favoritesArticlesSlice/favoritesArticlesSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  ArticleItem,
  Button,
  Data,
  Description,
  StyledFavoritesPage,
  Title,
  Image,
  NewsSite,
} from "./styles";
import { getDate } from "utils/getDate";

export const FavoritesArticlesPage = () => {
  const dispatch = useAppDispatch();
  const { favoritesArticles } = useAppSelector(getFavoritesArticles);
  return (
    <StyledFavoritesPage>
      {favoritesArticles.map((article) => {
        return (
          <Link to={`/articles/${article.id}`}>
            <ArticleItem>
              <Description>
                <NewsSite>NewsSite: {article.newsSite}</NewsSite>
                <Image src={article.imageUrl} alt={article.title} />
                <Data>Data: {getDate(article.updatedAt)}</Data>
                <Title>Title: {article.title}</Title>
                <Button
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch(removeFavorite(article.id));
                  }}
                >
                  <CloseIcon/>
                </Button>
              </Description>
            </ArticleItem>
          </Link>
        );
      })}
    </StyledFavoritesPage>
  );
};
