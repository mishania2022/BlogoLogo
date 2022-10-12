/* eslint-disable max-len */
import { CloseIcon } from "assets";
import { Link } from "react-router-dom";
import { removeFavoriteBlog } from "store/features/favoritesBlogsSlice/favoritesBlogsSlice";
import { getFavoritesBlogs } from "store/selectors/blogFavoritesSelector";
import { useAppDispatch, useAppSelector } from "store/hooks";
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
import { getDate } from "utils/getDate";

const itemVariants = {
  visible: () => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.1,
      duration: 1.3,
    },
  }),
  hidden: { opacity: 0, x: 200, y: -300, scale: 1.4 },
};


export const FavoritesBlogsPage = () => {
  const dispatch = useAppDispatch();
  const { favoritesBlogs } = useAppSelector(getFavoritesBlogs);
  return (
    <StyledFavoritesPage>
      {favoritesBlogs.map((blog, index) => {
        return (
          <Link to={`/blogs/${blog.id}`}>
            <BlogItem variants={itemVariants} initial="hidden" animate="visible" custom={index}>
              <Description>
                <NewsSite>NewsSite: {blog.newsSite}</NewsSite>
                <Image src={blog.imageUrl} alt={blog.title} />
                <Data>Data: {getDate(blog.updatedAt)}</Data>
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
