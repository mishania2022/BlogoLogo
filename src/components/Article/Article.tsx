import { addToFavorites } from "store/features/favoritesArticlesSlice/favoritesArticlesSlice";
import { useAppDispatch } from "store/hooks";
import { IArticle } from "types";
import { getDate } from "utils/getDate";
import { StyledArticle, Image, Description, Date, Title, Button, HeartIconLike } from "./styles";

interface IProps {
  article: IArticle;
}

export const Article = ({ article }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <StyledArticle initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
      <Image src={article.imageUrl} alt="image" />
      <Description>
        <Date>{getDate(article.updatedAt)}</Date>
        <Title>{article.title}</Title>
        <Button
          onClick={(event) => {
            event.preventDefault();
            dispatch(addToFavorites(article));
          }}
        >
          <HeartIconLike />
        </Button>
      </Description>
    </StyledArticle>
  );
};
