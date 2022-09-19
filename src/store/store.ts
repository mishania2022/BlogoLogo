import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/User/userSlice";
import articlesReducer from "./features/Articles/articlesSlice";
import blogsReducer from "./features/Blogs/blogsSlice";
import articleDetailsReducer from "./features/Articles/articlesDetailsSlice";
import blogDetailsReducer from "./features/Blogs/blogsDetailsSlice";

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
