import { Link } from 'react-router-dom'
import { ROUTE } from '../../routes/routes'
import { StyledSignInStack } from './styles'

export const SignInStack = () => {
  return (
    <StyledSignInStack ><Link to={ROUTE.SING_IN}>SignInStack</Link></StyledSignInStack>
  )
}
