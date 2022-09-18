import { Outlet } from 'react-router-dom'
import { Footer } from '../'
import { Navbar } from '../'
import { Wrapper, Container, Main } from './styles'

export const MainTemplate = () => {
    return (
        <Wrapper>
            <Navbar />
            <Container>
                <Main>
                    <Outlet />
                </Main>
                <Footer />
            </Container>
        </Wrapper >
    )
}
