import styled from "styled-components";
import { Media } from "../../ui/breakepoints";

const StyledDetailArticlesPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 1120px;
  height: 518px;
  border-radius: 16px 16px 0 0;
  ${Media.MD} {
    width: 688px;
    height: 359px;
  }

  ${Media.SM} {
    width: 272px;
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
`;

const Description = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  text-align: justify;
`;

export { StyledDetailArticlesPage, Image, NewsSite, Title, Description };
