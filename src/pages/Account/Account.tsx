import { useNavigate } from "react-router-dom";
import { fetchSignOut } from "store/features/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { useToggle } from "hooks/useToggle";
import { ROUTE } from "routes";
import { Container, CreationTime, Email, LogOut, Name, StyledAccount, Title } from "./styles";

export const Account = () => {
  const { email, creationTime, name, surname } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isOpen, toggleOpen] = useToggle(false);

  const handleOut = () => {
    dispatch(fetchSignOut())
      .then(() => {
        navigate(ROUTE.HOME);
      })
      .finally(() => {
        toggleOpen();
      });
  };

  return (
    <StyledAccount>
      <Container>
        <Title>Account</Title>
        <Name>Name: {name}</Name>
        <Name>Surname: {surname}</Name>
        <Email>Email: {email}</Email>
        <CreationTime>
          Account creation time: {new Date(creationTime).toLocaleDateString()}
        </CreationTime>
        <LogOut type="button" onClick={handleOut}>
          Log out
        </LogOut>
      </Container>
    </StyledAccount>
  );
};
