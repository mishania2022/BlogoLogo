import styled from "styled-components";
import { Color } from "ui/colors";
import { Media } from "ui/breakepoints";
import { motion } from "framer-motion";

const StyledAccount = styled(motion.div)`
  margin-top: 80px;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 42px;
  line-height: 46px;
  color: ${Color.Primary};

  ${Media.MD} {
    font-size: 32px;
    line-height: 34px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  margin: 0 auto;
  padding: 20px 20px;
  gap: 20px;
  width: 800px;
  height: 300px;
  border-radius: 16px;
  background-color: ${Color.White};
  color: ${Color.Secondary};
`;

const Name = styled.h2`
  font-size: 32px;
  line-height: 44px;

  ${Media.MD} {
    font-size: 24px;
    line-height: 26px;
  }
  ${Media.SM} {
    font-size: 18px;
    line-height: 20px;
  }
`;

const Email = styled.h2`
  font-size: 32px;
  line-height: 44px;

  ${Media.MD} {
    font-size: 24px;
    line-height: 26px;
  }
  ${Media.SM} {
    font-size: 18px;
    line-height: 20px;
  }
`;

const CreationTime = styled.h2`
  font-size: 32px;
  line-height: 44px;

  ${Media.MD} {
    font-size: 24px;
    line-height: 26px;
  }
  ${Media.SM} {
    font-size: 18px;
    line-height: 20px;
  }
`;

const LogOut = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  line-height: 20px;
  background-color: ${Color.Primary};
  color: #ffffff;
  border-radius: 16px;
  cursor: pointer;

  :active,
  :hover {
    background-color: ${Color.PrimaryLight};
  }
`;

export { StyledAccount, Name, Title, Container, Email, CreationTime, LogOut };
