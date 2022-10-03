import styled from "styled-components";
import { HeartIcon } from "../../assets";
import { Media } from "../../ui/breakepoints";
import { Color } from "../../ui/colors";

const StyledArticle = styled.li`
  max-width: 352px;
  height: 388px;
  object-fit: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
  background-color: ${Color.White};
  list-style: none;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px 32px;
  list-style: none;

  ${Media.MD} {
    max-width: 328px;
  }
  ${Media.SM} {
    max-width: 272px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 208px;
  border-radius: 16px 16px 0 0;

  :hover {
    opacity: 0.8;
  }

  ${Media.MD} {
    max-width: 328px;
  }
  ${Media.SM} {
    max-width: 272px;
  }
`;

const Date = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  margin-bottom: 8px;
  ${Media.MD} {
  }
  ${Media.SM} {
    text-align: justify;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: ${Color.Medium};
  ${Media.MD} {
  }
  ${Media.SM} {
    text-align: justify;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
  }
`;

const Description = styled.div`
  padding: 32px;
`;

const Button = styled.button`
  display: inline;
  position: absolute;
  padding: 10px;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const HeartIconLike = styled(HeartIcon)`
  height: 20px;
  width: 20px;
  fill: red;
  :hover {
    opacity: 0.8;
  }
  :active,
  :focus {
    fill: purple;
  }
  transition: 1s;
`;

export { StyledArticle, Description, Image, Date, Title, Button, HeartIconLike };
