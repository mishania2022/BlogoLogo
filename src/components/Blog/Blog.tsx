import { addToFavoritesBlog } from "store/features/favoritesBlogsSlice/favoritesBlogsSlice";
import { useAppDispatch } from "store/hooks";
import { IBlog } from "types";
import { getDate } from "utils/getDate";
import {
  StyledBlog,
  Image,
  Description,
  Date,
  Title,
  Button,
  HeartIconLike,
} from "./styles";

interface IProps {
  blog: IBlog;
}

export const Blog = ({ blog }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <StyledBlog>
      <Image src={blog.imageUrl} />
      <Description>
        <Date>{getDate(blog.updatedAt)}</Date>
        <Title>{blog.title}</Title>
        <Button
          onClick={(event) => {
            event.preventDefault();
            dispatch(addToFavoritesBlog(blog));
          }}
        >
          <HeartIconLike />
        </Button>
      </Description>
    </StyledBlog>
  );
};