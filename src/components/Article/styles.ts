import styled from "styled-components";
import { HeartIcon } from "../../assets";
import { Media } from "../../ui/breakepoints";
import { Color } from "../../ui/colors";

const StyledArticle = styled.li`
  height: 388px;
  width: 352px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
  background-color: ${Color.White};
  list-style: none;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px 32px;
  list-style: none;

  ${Media.MD} {
    width: 328px;
  }
  ${Media.SM} {
    width: 272px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 208px;
  border-radius: 16px 16px 0 0;
`;

const Description = styled.div`
  padding: 32px;
`;

const Date = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  margin-bottom: 8px;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: ${Color.Medium};
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
    fill: purple;
  }
  :active {
    fill: orange;
  }
`;

export { StyledArticle, Description, Image, Date, Title, Button, HeartIconLike };
