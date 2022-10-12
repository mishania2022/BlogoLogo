import { Blog } from "components/Blog/Blog";
import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchSearchBlogs } from "store/features/searchBlogsSlice/searchBlogsSlice";
import { getSearchBlogs } from "store/selectors/searchBlogSelectors";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IBlog } from "../../types";
import { StyledBlogsList, StyledClockLoader, StyledEmpty } from "./styles";

interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBlogsList = ({ value }: IProps) => {
  const dispatch = useAppDispatch();
  const { isLoading, error, searchBlogs } = useAppSelector(getSearchBlogs);

  useEffect(() => {
    value !== "" ? dispatch(fetchSearchBlogs(value)) : dispatch(fetchSearchBlogs("@"));
  }, [dispatch, value]);

  if (isLoading) {
    return (
      <StyledBlogsList>
        <StyledClockLoader />
      </StyledBlogsList>
    );
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return searchBlogs.length === 0 ? (
    <StyledBlogsList>
      <StyledEmpty />
    </StyledBlogsList>
  ) : (
    <StyledBlogsList>
      {searchBlogs.map((blog: IBlog, index) => {
        return (
          <Link to={`/blogs/${blog.id}`}>
            <Blog blog={blog} custom={index} />
          </Link>
        );
      })}
    </StyledBlogsList>
  );
};
