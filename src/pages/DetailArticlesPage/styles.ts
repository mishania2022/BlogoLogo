import styled from "styled-components";
import { Color } from "ui/colors";
import { Media } from "../../ui/breakepoints";

const StyledDetailArticlesPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  height: 518px;
  object-fit: cover;
  background: url("https://avatarko.ru/img/kartinka/2/zhivotnye_kot_prikol_ochki_1637.jpg");
  border-radius: 16px 16px 0 0;
  ${Media.MD} {
    height: 359px;
  }

  ${Media.SM} {
    height: 224px;
  }
`;

const NewsSite = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  text-align: center;
  color: ${Color.Secondary}
`;

const Title = styled.h2`
  padding-top: 40px;
  padding-bottom: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${Color.Secondary}
`;

const Description = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  text-align: justify;
  color: ${Color.Secondary}
`;

export { StyledDetailArticlesPage, Image, NewsSite, Title, Description };
