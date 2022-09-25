import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../store/features/Blogs/blogsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBlogs } from "../../store/selectors/blogSelector";
import { IBlog } from "../../types";
import { StyledClockLoader } from "../ArticleList/styles";
import { Blog } from "../Blog/Blog";
import { StyledBlogList } from "./styles";

export const BlogList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, blogs } = useAppSelector(getBlogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

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
      {blogs.map((blog: IBlog) => {
        return (
          <Link to={`/blogs/${blog.id}`}>
            <Blog blog={blog} />
          </Link>
        );
      })}
    </StyledBlogList>
  );
};
