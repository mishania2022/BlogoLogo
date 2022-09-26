import styled from "styled-components";
import { Basket } from "../../assets";
import { Media } from "../../ui/breakepoints";
import { Color } from "../../ui/colors";

const StyledFavoritesPage = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px 32px;
  list-style: none;

  ${Media.MD} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px 32px;
  }

  ${Media.SM} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ArticleItem = styled.div`
  height: 500px;
  width: 400px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Button = styled.button`
  display: inline;
  float: right;
  border: none;
  cursor: pointer;
`;

const StyledBasket = styled(Basket)`
  :hover {
    fill: ${Color.Secondary};
  }
  :active {
    fill: ${Color.PrimaryLight};
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

const Data = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  margin-bottom: 5px;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: ${Color.Medium};
`;

export { StyledFavoritesPage, Button, StyledBasket, Title, Description, Data, Image, ArticleItem };
