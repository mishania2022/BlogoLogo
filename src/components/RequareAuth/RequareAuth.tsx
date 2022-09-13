
import { Navigate } from 'react-router-dom';
import { ROUTE } from '../../routes/routes';

export const RequareAuth = () => {
    const isAuth = false;
    return (
        isAuth ? <div>ContentPage</div> : <Navigate to={`/${ROUTE.SING_IN}`} />
    )
}
