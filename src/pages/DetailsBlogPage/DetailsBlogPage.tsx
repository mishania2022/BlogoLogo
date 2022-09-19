import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogByDetails } from "../../store/features/Blogs/blogsDetailsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getDetailsBlogs } from "../../store/selectors/blogDetailsSelector";
import { IBlog } from "../../types";
import { StyledDetailBlogsPage } from "./styles";

export const DetailsBlogPage = () => {
  const { id = "" } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, error, details } = useAppSelector(getDetailsBlogs);
  const { title, newsSite, imageUrl, summary } = details || ({} as IBlog);

  useEffect(() => {
    dispatch(fetchBlogByDetails(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <StyledDetailBlogsPage>
      <h1>{newsSite}</h1>
      <img src={imageUrl} alt="image" />
      <h2>Title: {title}</h2>
      <h2>Description: {summary}</h2>
    </StyledDetailBlogsPage>
  );
};
