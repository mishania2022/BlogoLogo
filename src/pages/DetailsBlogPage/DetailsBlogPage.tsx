import { StyledArticlesList, StyledClockLoader } from "components/ArticleList/styles";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogByDetails } from "store/features/blogsDetails/blogsDetailsSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getDetailsBlogs } from "store/selectors/blogDetailsSelector";
import { IBlog } from "types";
import { StyledDetailBlogsPage, Image, NewsSite, Description, Title } from "./styles";

export const DetailsBlogPage = () => {
  const { id = "" } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, error, details } = useAppSelector(getDetailsBlogs);
  const { title, newsSite, imageUrl, summary } = details || ({} as IBlog);

  useEffect(() => {
    dispatch(fetchBlogByDetails(id));
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <StyledArticlesList>
        <StyledClockLoader />
      </StyledArticlesList>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <StyledDetailBlogsPage>
      <NewsSite>{newsSite}</NewsSite>
      <Image src={imageUrl} alt="image" />
      <Title>Title: {title}</Title>
      <Description>Description: {summary}</Description>
    </StyledDetailBlogsPage>
  );
};
