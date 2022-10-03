import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "store/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { ROUTE } from "../../routes";

export const RequireAuth = () => {
  const { isAuth } = useAppSelector(getUserInfo);
  return isAuth ? <Outlet/> : <Navigate to={`/${ROUTE.SING_IN}`} />;
};
