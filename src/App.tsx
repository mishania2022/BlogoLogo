import { Route, Routes } from "react-router-dom";
import { MainTemplate, RequireAuth } from "./components";
import {
  ContentPage,
  DetailArticlesPage,
  DetailsBlogPage,  
  FavoritesArticlesPage,  
  FavoritesBlogsPage,  
  HomePage,
  NotFoundPage,
  SearchPage,
  SignInPage,
  SignUpPage,
} from "./pages";
import { ROUTE } from "./routes";

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route path={ROUTE.HOME} element={<HomePage />} />
        <Route path={ROUTE.BLOG_DETAILS} element={<DetailsBlogPage />} />
        <Route path={ROUTE.ARTICLE_DETAILS} element={<DetailArticlesPage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route element={<RequireAuth />}>
          <Route path={ROUTE.CONTENT} element={<ContentPage />} />
        </Route>
        <Route path={ROUTE.FAVORITES_ARTICLES} element={<FavoritesArticlesPage />} />
        <Route path={ROUTE.FAVORITES_BLOGS} element={<FavoritesBlogsPage />} />
        <Route path={ROUTE.SING_IN} element={<SignInPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
