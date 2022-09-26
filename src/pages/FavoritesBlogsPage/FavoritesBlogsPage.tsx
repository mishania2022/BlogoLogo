/* eslint-disable max-len */
import { Link } from "react-router-dom";
import { removeFavoriteBlog } from "store/features/favoritesBlogsSlice/favoritesBlogsSlice";
import { getFavoritesBlogs } from "store/selectors/blogFavoritesSelector";
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

export const FavoritesBlogsPage = () => {
  const dispatch = useAppDispatch();
  const { favoritesBlogs } = useAppSelector(getFavoritesBlogs);
  return (
    <StyledFavoritesPage>
      {favoritesBlogs.map((blog) => {
        return (
          <ArticleItem>
            <Link to={`/blogs/${blog.id}`}>
              <img src={blog.imageUrl} alt="image" width="100%" height="200px" />
              <Title>Title: {blog.title}</Title>
              <div className="d-flex justify-content-between">
                <Description>NewsSite: {blog.newsSite}</Description>
                <Data>Data: {blog.publishedAt}</Data>
                <Button
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch(removeFavoriteBlog(blog.id));
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
