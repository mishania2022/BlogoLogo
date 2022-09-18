import {
  StyledBlog,
  Image,
  Description,
  Date,
  Title,
} from "./styles";

interface IProps {
  imageUrl: string;
  title: string;
  publishedAt: string;
}

export const Blog = ({ imageUrl, title, publishedAt }: IProps) => {
  return (
    <StyledBlog>
      <Image src={imageUrl} />
      <Description>
        <Date>{publishedAt}</Date>
        <Title>{title}</Title>
      </Description>
    </StyledBlog>
  );
};