import {
  StyledArticle,
  Image,
  Description,
  Date,  
  Title,
} from "./styles";

interface IProps {
  publishedAt: string;
  title: string;
  imageUrl: string;
}

export const Article = ({ title, publishedAt, imageUrl }: IProps) => {
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