/* eslint-disable max-len */
import { CloseIcon } from "assets";
import { Link } from "react-router-dom";
import { removeFavoriteBlog } from "store/features/favoritesBlogsSlice/favoritesBlogsSlice";
import { getFavoritesBlogs } from "store/selectors/blogFavoritesSelector";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  Button,
  Data,
  Description,
  NewsSite,
  StyledFavoritesPage,
  Title,
  Image,
  BlogItem,
} from "./styles";

export const FavoritesBlogsPage = () => {
  const dispatch = useAppDispatch();
  const { favoritesBlogs } = useAppSelector(getFavoritesBlogs);
  return (
    <StyledFavoritesPage>
      {favoritesBlogs.map((blog) => {
        return (
          <Link to={`/articles/${blog.id}`}>
            <BlogItem>
              <Description>
                <NewsSite>NewsSite: {blog.newsSite}</NewsSite>
                <Image src={blog.imageUrl} alt="image" />
                <Data>Data: {blog.publishedAt}</Data>
                <Title>Title: {blog.title}</Title>
                <Button
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch(removeFavoriteBlog(blog.id));
                  }}
                >
                  <CloseIcon/>
                </Button>
              </Description>
            </BlogItem>
          </Link>
        );
      })}
    </StyledFavoritesPage>
  );
};
