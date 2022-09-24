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
  favoritesReducer,
} from "./index";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites", "user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  articles: articlesReducer,
  blogs: blogsReducer,
  articleDetails: articleDetailsReducer,
  blogDetails: blogDetailsReducer,
  favorites: favoritesReducer,
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
