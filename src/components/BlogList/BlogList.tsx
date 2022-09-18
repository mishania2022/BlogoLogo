import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../store/features/Blogs/blogsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBlogs } from "../../store/selectors/blogSelector";
import { InputValues } from "../../types";
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
      <h1>
        <StyledClockLoader />
      </h1>
    );
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <StyledBlogList>
      {blogs.map(({ title, imageUrl, publishedAt, id }: InputValues) => {
        return (
          <Link to={`/blogs/${id}`}>
            <Blog imageUrl={imageUrl} title={title} publishedAt={publishedAt} />
          </Link>
        );
      })}
    </StyledBlogList>
  );
};
