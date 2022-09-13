import { Route, Routes } from "react-router-dom"
import { MainTemplate } from "./components/MainTemplate/MainTemplate"
import { RequareAuth } from "./components/RequareAuth/RequareAuth"
import { ContentPage } from "./pages/ContentPage"
import { FavoritesPage } from "./pages/FavoritesPage"
import { HomePage } from "./pages/HomePage/HomePage"
import { NotFoundPage } from "./pages/NotFoundPage"
import { SearchPage } from "./pages/SearchPage"
import { SignInPage } from "./pages/SignInPage"
import { SignUpPage } from "./pages/SignUpPage"
import { ROUTE } from "./routes/routes"

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={< MainTemplate />}>
        <Route path={ROUTE.HOME} element={<HomePage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route element={<RequareAuth />}>
          <Route path={ROUTE.CONTENT} element={<ContentPage />} />
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        </Route>
        <Route path={ROUTE.SING_IN} element={<SignInPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
