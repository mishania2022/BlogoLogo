import { Route, Routes } from "react-router-dom"
import { MainTemplate } from "./components"
import { RequireAuth } from "./components"
import { ContentPage } from "./pages"
import { FavoritesPage } from "./pages"
import { HomePage } from "./pages"
import { NotFoundPage } from "./pages"
import { SearchPage } from "./pages"
import { SignInPage } from "./pages"
import { SignUpPage } from "./pages"
import { DetailArticlesPage } from "./pages/DetailArticlesPage/DetailArticlesPage"
import { DetailsBlogPage } from "./pages/DetailsBlogPage/DetailsBlogPage"
import { ROUTE } from "./routes"

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={< MainTemplate />}>
        <Route path={ROUTE.HOME} element={<HomePage />} />
        <Route path={ROUTE.BLOG_DETAILS} element={<DetailsBlogPage/>}/>
        <Route path={ROUTE.ARTICLE_DETAILS} element={<DetailArticlesPage/>}/>
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route element={<RequireAuth />}>
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
