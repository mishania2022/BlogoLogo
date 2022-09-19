import { Link } from "react-router-dom";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ROUTE } from "../../routes";
import { StyledSearch } from "./styles";
export const SearchIcon = () => {
  return (
    <StyledSearch>
      <Link to={ROUTE.SEARCH}>
        <Search />
      </Link>
    </StyledSearch>
  );
};
