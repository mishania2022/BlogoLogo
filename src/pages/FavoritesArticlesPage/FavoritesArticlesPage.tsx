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
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export const FavoritesArticlesPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useAppDispatch();
  const { favoritesArticles } = useAppSelector(getFavoritesArticles);
  return (
    <StyledFavoritesPage>
      {favoritesArticles.map((article) => {
        return (
          <Link to={`/articles/${article.id}`}>
            <AnimatePresence>
              {isOpen && (
                <ArticleItem
                  animate={{ x: 0, y: 0 }}
                  initial={{ x: -500, y: -500 }}
                  transition={{ delay: 0.5, duration: 1.3 }}
                  exit={{ x: -500, y: -500 }}
                >
                  <Description>
                    <NewsSite>NewsSite: {article.newsSite}</NewsSite>
                    <Image src={article.imageUrl} alt={article.title} />
                    <Data>Data: {getDate(article.updatedAt)}</Data>
                    <Title>Title: {article.title}</Title>
                    <Button
                      onClick={(event) => {
                        event.preventDefault();
                        dispatch(removeFavorite(article.id));
                        // setIsOpen(false);
                      }}
                    >
                      <CloseIcon />
                    </Button>
                  </Description>
                </ArticleItem>
              )}
            </AnimatePresence>
          </Link>
        );
      })}
    </StyledFavoritesPage>
  );
};
