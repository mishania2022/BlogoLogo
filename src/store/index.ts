/* eslint-disable max-len */
import userReducer from "./features/User/userSlice";
import articlesReducer from "./features/Articles/articlesSlice";
import blogsReducer from "./features/Blogs/blogsSlice";
import articleDetailsReducer from "./features/articlesDetails/articlesDetailsSlice";
import blogDetailsReducer from "./features/blogsDetails/blogsDetailsSlice";
import favoritesReducer from "./features/Favorites/favoritesSlice";

export {
  articlesReducer,
  userReducer,
  blogsReducer,
  articleDetailsReducer,
  blogDetailsReducer,
  favoritesReducer,
};
