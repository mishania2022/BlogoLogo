
import { Navigate } from 'react-router-dom';
import { ROUTE } from '../../routes';

export const RequireAuth = () => {
    const isAuth = false;
    return (
        isAuth ? <div>ContentPage</div> : <Navigate to={`/${ROUTE.SING_IN}`} />
    )
}
