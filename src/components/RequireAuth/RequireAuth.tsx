import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "../../routes";

export const RequireAuth = () => {
  const isAuth = true;
  return isAuth ? <Outlet/> : <Navigate to={`/${ROUTE.SING_IN}`} />;
};
