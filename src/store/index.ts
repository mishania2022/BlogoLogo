/* eslint-disable max-len */
import userReducer from "./features/userSlice/userSlice";
import articlesReducer from "./features/articlesSlice/articlesSlice";
import blogsReducer from "./features/blogsSlice/blogsSlice";
import articleDetailsReducer from "./features/articlesDetails/articlesDetailsSlice";
import blogDetailsReducer from "./features/blogsDetails/blogsDetailsSlice";
import favoritesReducer from "./features/favoritesArticlesSlice/favoritesArticlesSlice";
import favoritesArticlesSlice from "./features/favoritesArticlesSlice/favoritesArticlesSlice";
import favoritesBlogsSlice from "./features/favoritesBlogsSlice/favoritesBlogsSlice";
import searchArticlesSlice from "./features/searchArticlesSlice/searchArticlesSlice";
import searchBlogsSlice from "./features/searchBlogsSlice/searchBlogsSlice";
import sortArticlesSlice from "./features/sortArticlesSlice/sortArticlesSlice";
import sortWordSlice from "./features/sortWordSlice/sortWordSlice";

export {
  articlesReducer,
  userReducer,
  blogsReducer,
  articleDetailsReducer,
  blogDetailsReducer,
  favoritesReducer,
  favoritesArticlesSlice,
  favoritesBlogsSlice,
  searchArticlesSlice,
  searchBlogsSlice,
  sortArticlesSlice,
  sortWordSlice
};
