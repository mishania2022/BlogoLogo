import { addToFavorites } from "../../store/features/Favorites/favoritesSlice";
import { useAppDispatch } from "../../store/hooks";
import { IBlog } from "../../types";
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
        <Date>{blog.publishedAt}</Date>
        <Title>{blog.title}</Title>
        <Button
          onClick={(event) => {
            event.preventDefault();
            dispatch(addToFavorites(blog));
          }}
        >
          <HeartIconLike />
        </Button>
      </Description>
    </StyledBlog>
  );
};