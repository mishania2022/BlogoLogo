/* eslint-disable max-len */
import styled from "styled-components";
import { HeartIcon } from "assets";
import { Media } from "ui/breakepoints";
import { Color } from "ui/colors";
import { motion } from "framer-motion";

const StyledBlog = styled(motion.li)`
  height: 388px;
  max-width: 352px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
  background-color: ${Color.White};

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
  border-radius: 16px 16px 0 0;
  background: url("https://avatarko.ru/img/kartinka/2/zhivotnye_kot_prikol_ochki_1637.jpg");
  background-position: center;

  :hover {
    opacity: 0.8;
  }
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
  fill: yellow;
  :hover {
    opacity: 0.7;
  }
  :active,
  :focus {
    fill: purple;
  }
  transition: 1s;
`;

export { StyledBlog, Description, Image, Date, Title, HeartIconLike, Button };
