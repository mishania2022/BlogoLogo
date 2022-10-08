import { ROUTE } from "routes";
import { StyledLink, StyledSignIn, Title } from "./styles";

interface IProps {
  userName: string;
  userSurname: string;
}

export const Badge = ({ userName, userSurname }: IProps) => {
  return (
    <StyledSignIn>
      <StyledLink to={ROUTE.ACCOUNT}>
        <Title>{userName + userSurname}</Title>
      </StyledLink>
    </StyledSignIn>
  );
};
