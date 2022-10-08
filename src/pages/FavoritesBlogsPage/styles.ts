import styled from "styled-components";
import { BasketIcon } from "../../assets";
import { Media } from "../../ui/breakepoints";
import { Color } from "../../ui/colors";

const StyledFavoritesPage = styled.ul`
  margin-top: 100px;
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

const BlogItem = styled.div`
  max-width: 352px;
  height: 500px;
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
  object-fit: cover;
  background: url("https://avatarko.ru/img/kartinka/2/zhivotnye_kot_prikol_ochki_1637.jpg");
  border-radius: 16px;
`;

const Data = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  margin-bottom: 5px;
  ${Media.MD} {
    text-align: justify;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: ${Color.Medium};
  ${Media.MD} {
    text-align: justify;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
  }
`;
const Description = styled.div`
  padding: 32px;
`;
const NewsSite = styled.div`
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

const StyledBasket = styled(BasketIcon)`
  :hover {
    fill: ${Color.Secondary};
  }
  :active {
    fill: ${Color.PrimaryLight};
  }
`;

// eslint-disable-next-line max-len
export {
  StyledFavoritesPage,
  Button,
  StyledBasket,
  Title,
  Description,
  Data,
  Image,
  BlogItem,
  NewsSite,
};
