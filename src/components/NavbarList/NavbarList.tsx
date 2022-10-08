import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { useAppSelector } from "store/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { Badge, FavoritesArticles, FavoritesBlogs, SearchIcon } from "..";
import { SignIn } from "..";
import { SignUp } from "..";
import { StyledNavbarList } from "./styles";

interface IProps {
  open: boolean;
}
export const NavbarList = ({ open }: IProps) => {
  const { isAuth, name, surname } = useAppSelector(getUserInfo);

  return (
    <StyledNavbarList open={open}>
      {isAuth ? (
        <>
          <FavoritesArticles />
          <FavoritesBlogs />
          <Badge
            userName={name === "" ? name : name}
            userSurname={surname === "" ? surname : surname}
          />
        </>
      ) : (
        <Link to={ROUTE.SING_IN}></Link>
      )}
      <SearchIcon />
      <SignIn />
      <SignUp />
    </StyledNavbarList>
  );
};
