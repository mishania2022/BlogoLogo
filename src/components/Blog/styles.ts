import styled from "styled-components";
import { HeartIcon } from "../../assets";
import { Media } from "../../ui/breakepoints";
import { Color } from "../../ui/colors";

const StyledBlog = styled.li`
  height: 388px;
  max-width: 352px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 16px;
  background-color: ${Color.White};

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
  float: right;
  border: none;
  cursor: pointer;
`;

const HeartIconLike = styled(HeartIcon)`
  height: 20px;
  width: 20px;
  fill: yellow;
  :hover {
    fill: ${Color.Secondary};
  }
  :active {
    fill: ${Color.PrimaryLight};
  }
`;

export { StyledBlog, Description, Image, Date, Title, HeartIconLike, Button};
