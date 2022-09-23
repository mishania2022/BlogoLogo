import { IBlog } from "../../types";
import {
  StyledBlog,
  Image,
  Description,
  Date,
  Title,
} from "./styles";

interface IProps {
  blog: IBlog;
}

export const Blog = ({ blog: { imageUrl, title, publishedAt } }: IProps) => {
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