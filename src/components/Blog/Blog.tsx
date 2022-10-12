import { addToFavoritesBlog } from "store/features/favoritesBlogsSlice/favoritesBlogsSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { IBlog } from "types";
import { getDate } from "utils/getDate";
import { StyledBlog, Image, Description, Date, Title, Button, HeartIconLike } from "./styles";

interface IProps {
  blog: IBlog;
  custom: number;
}

const itemVariants = {
  visible: () => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.1,
      duration: 1.3,
    },
  }),
  hidden: { opacity: 0, scale: 0 },
};

export const Blog = ({ blog }: IProps) => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(getUserInfo);

  return (
    <StyledBlog variants={itemVariants} initial="hidden" animate="visible">
      <Image src={blog.imageUrl} />
      <Description>
        <Date>{getDate(blog.updatedAt)}</Date>
        <Title>{blog.title}</Title>
        {isAuth && (
          <Button
            onClick={(event) => {
              event.preventDefault();
              dispatch(addToFavoritesBlog(blog));
            }}
          >
            <HeartIconLike />
          </Button>
        )}
      </Description>
    </StyledBlog>
  );
};
