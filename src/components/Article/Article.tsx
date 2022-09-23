import { IArticle } from "../../types";
import {
  StyledArticle,
  Image,
  Description,
  Date,
  Title,
} from "./styles";

interface IProps {
  article: IArticle;
}

export const Article = ({ article: { title, publishedAt, imageUrl } }: IProps) => {
  return (
    <StyledArticle>
      <Image src={imageUrl} alt="image" />
      <Description>
        <Date>{publishedAt}</Date>
        <Title>{title}</Title>
      </Description>
    </StyledArticle>
  );
};