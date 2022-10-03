import { addToFavoritesBlog } from "store/features/favoritesBlogsSlice/favoritesBlogsSlice";
import { useAppDispatch } from "store/hooks";
import { IBlog } from "types";
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
        <Date>{blog.publishedAt.substring(8, 10) + "."
            +blog.publishedAt.substring(5, 7) + "."
            +blog.publishedAt.substring(0, 4) + " "
            +blog.publishedAt.substring(11, 19)}</Date>
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