import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import {
  userReducer,
  articlesReducer,
  blogsReducer,
  articleDetailsReducer,
  blogDetailsReducer,
  favoritesArticlesSlice,
  favoritesBlogsSlice,
  searchBlogsSlice,
  sortArticlesSlice,
  sortWordSlice
} from "./index";
import searchArticlesSlice from "./features/searchArticlesSlice/searchArticlesSlice";
import sortBlogsSlice from "./features/sortBlogsSlice/sortBlogsSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favoritesArticles", "favoritesBlogs", "user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  articles: articlesReducer,
  blogs: blogsReducer,
  articleDetails: articleDetailsReducer,
  blogDetails: blogDetailsReducer,
  favoritesArticles: favoritesArticlesSlice,
  favoritesBlogs: favoritesBlogsSlice,
  searchArticles: searchArticlesSlice,
  searchBlogs: searchBlogsSlice,
  sortArticles: sortArticlesSlice,
  sortBlogs: sortBlogsSlice,
  sortWord: sortWordSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
