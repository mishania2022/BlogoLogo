import { useEffect, useState } from "react";
import { fetchArticlesByPage } from "store/features/articlesSlice/articlesSlice";
import { fetchBlogsByPage } from "store/features/blogsSlice/blogsSlice";
import { useAppDispatch } from "store/hooks";
import { StyledPagination, ButtonPag } from "./styles";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const [requestParams, setRequestParams] = useState({ page: 24 });

  const handlePrev = () => {
    setRequestParams({
      page: requestParams.page - 12,
    });
  };

  const handleNext = () => {
    setRequestParams({
      page: requestParams.page + 12,
    });
  };

  useEffect(() => {
    dispatch(fetchArticlesByPage(requestParams.page));
  }, [dispatch, requestParams]);

  useEffect(() => {
    dispatch(fetchBlogsByPage(requestParams.page));
  }, [dispatch, requestParams]);

  return (
    <StyledPagination>
      <ButtonPag onClick={handlePrev}>Prev</ButtonPag>
      <ul>
        <li>{}</li>
        <li>{}</li>
        <li>{}</li>
      </ul>
      <ButtonPag onClick={handleNext}>Next</ButtonPag>
    </StyledPagination>
  );
};
