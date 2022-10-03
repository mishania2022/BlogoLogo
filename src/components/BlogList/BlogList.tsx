import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchSortBlogs } from "store/features/sortBlogsSlice/sortBlogsSlice";
import { getSortBlogs } from "store/selectors/sortBlogsSelector";
import { getSortWord } from "store/selectors/sortWordSelectors";
import { fetchBlogs } from "store/features/blogsSlice/blogsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBlogs } from "store/selectors/blogSelector";
import { IBlog } from "types";
import { StyledClockLoader } from "../ArticleList/styles";
import { Blog } from "../Blog/Blog";
import { StyledBlogList } from "./styles";

export const BlogList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, blogs } = useAppSelector(getBlogs);
  const { sortBlogs } = useAppSelector(getSortBlogs);
  const { sortWord } = useAppSelector(getSortWord);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSortBlogs(sortWord));
  }, [dispatch, sortWord]);

  if (isLoading) {
    return (
      <StyledBlogList>
        <StyledClockLoader />
      </StyledBlogList>
    );
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <StyledBlogList>
      {sortBlogs.length === 0
        ? blogs.map((blog: IBlog) => {
          return (
            <Link to={`/blogs/${blog.id}`}>
              <Blog blog={blog} />
            </Link>
          );
        })
        : sortBlogs.map((blog: IBlog) => {
          return (
            <Link to={`/blogs/${blog.id}`}>
              <Blog blog={blog} />
            </Link>
          );
        })}
    </StyledBlogList>
  );
};
