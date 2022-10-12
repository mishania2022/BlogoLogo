import { addToFavorites } from "store/features/favoritesArticlesSlice/favoritesArticlesSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { IArticle } from "types";
import { getDate } from "utils/getDate";
import { StyledArticle, Image, Description, Date, Title, Button, HeartIconLike } from "./styles";

interface IProps {
  article: IArticle;
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

export const Article = ({ article }: IProps) => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(getUserInfo);

  return (
    <StyledArticle variants={itemVariants} initial="hidden" animate="visible">
      <Image src={article.imageUrl} alt="image" />
      <Description>
        <Date>{getDate(article.updatedAt)}</Date>
        <Title>{article.title}</Title>
        {isAuth && (
          <Button
            onClick={(event) => {
              event.preventDefault();
              dispatch(addToFavorites(article));
            }}
          >
            <HeartIconLike />
          </Button>
        )}
      </Description>
    </StyledArticle>
  );
};
