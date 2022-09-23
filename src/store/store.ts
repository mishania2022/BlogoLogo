import { configureStore } from "@reduxjs/toolkit";
import {
  userReducer,
  articlesReducer,
  blogsReducer,
  articleDetailsReducer,
  blogDetailsReducer,
} from "./index";

const store = configureStore({
  reducer: {
    user: userReducer,
    articles: articlesReducer,
    blogs: blogsReducer,
    articleDetails: articleDetailsReducer,
    blogDetails: blogDetailsReducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
