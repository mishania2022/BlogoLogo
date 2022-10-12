import { useEffect, useState } from "react";
import { fetchArticlesByPage } from "store/features/articlesSlice/articlesSlice";
import { fetchBlogsByPage } from "store/features/blogsSlice/blogsSlice";
import { fetchSortArticlesByPage } from "store/features/sortArticlesSlice/sortArticlesSlice";
import { fetchSortBlogsByPage } from "store/features/sortBlogsSlice/sortBlogsSlice";
import { useAppDispatch } from "store/hooks";
import {
  StyledPagination,
  ButtonPag,
  ListPag,
  Button,
  CurrentButton,
  FirstPage,
  FirstLi,
  SecondLi,
  ThirdLi,
  FourthLi,
} from "./styles";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const [requestParams, setRequestParams] = useState({ page: 0, current: 1, sort: "publishedAt" });

  const handleFirst = () => {
    setRequestParams({
      page: (requestParams.page = 0),
      current: (requestParams.current = 1),
      sort:""
    });
  };

  const handleLast = () => {
    setRequestParams({
      page: (requestParams.page = 14515),
      current: (requestParams.current = 1212),
      sort:""
    });
  };

  const handleNext = () => {
    setRequestParams({
      page: requestParams.page === 14515 ? 14515 : requestParams.page + 12,
      current: requestParams.current < 1 ? 1 : requestParams.current + 1,
      sort:""
    });
  };
  const handlePrev = () => {
    setRequestParams({
      page: requestParams.page === 0 ? 0 : requestParams.page - 12,
      current: requestParams.current > 1212 ? 1212 : requestParams.current - 1,
      sort:""
    });
  };

  const handleNumberCurrent = () => {
    setRequestParams({
      page: requestParams.page,
      current: requestParams.current,
      sort:""
    });
  };

  const handleNumberOne = () => {
    setRequestParams({
      page: requestParams.page - 24,
      current: requestParams.current - 2,
      sort:""
    });
  };

  const handleNumberTwo = () => {
    setRequestParams({
      page: requestParams.page - 12,
      current: requestParams.current - 1,
      sort:""
    });
  };

  const handleNumberTree = () => {
    setRequestParams({
      page: requestParams.page + 12,
      current: requestParams.current + 1,
      sort:""
    });
  };

  const handleNumberFour = () => {
    setRequestParams({
      page: requestParams.page + 24,
      current: requestParams.current + 2,
      sort:""
    });
  };

  useEffect(() => {
    dispatch(fetchArticlesByPage(requestParams.page));
  }, [dispatch, requestParams]);

  useEffect(() => {
    dispatch(fetchSortArticlesByPage(requestParams.page));
  }, [dispatch, requestParams]);

  useEffect(() => {
    dispatch(fetchBlogsByPage(requestParams.page));
  }, [dispatch, requestParams]);

  useEffect(() => {
    dispatch(fetchSortBlogsByPage(requestParams.page));
  }, [dispatch, requestParams]);

  return (
    <StyledPagination>
      {requestParams.current === 1 ? true : <ButtonPag onClick={handlePrev}>Prev</ButtonPag>}
      <ListPag>
        <FirstPage>
          <Button onClick={handleFirst}>first</Button>
        </FirstPage>
        <SecondLi current={requestParams.current}>
          <Button onClick={handleNumberOne}>{requestParams.current - 2}</Button>
        </SecondLi>
        <FirstLi current={requestParams.current}>
          <Button onClick={handleNumberTwo}>{requestParams.current - 1}</Button>
        </FirstLi>
        <li>
          <CurrentButton onClick={handleNumberCurrent}>{requestParams.current}</CurrentButton>
        </li>
        <ThirdLi current={requestParams.current}>
          <Button onClick={handleNumberTree}>{requestParams.current + 1}</Button>
        </ThirdLi>
        <FourthLi current={requestParams.current}>
          <Button onClick={handleNumberFour}>{requestParams.current + 2}</Button>
        </FourthLi>
        <li>
          <Button onClick={handleLast}>last</Button>
        </li>
      </ListPag>
      {requestParams.current === 1212 ? true : <ButtonPag onClick={handleNext}>Next</ButtonPag>}
    </StyledPagination>
  );
};
