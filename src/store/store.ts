import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/User/userSlice";
import articlesReducer from "./features/Articles/articlesSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    articles: articlesReducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
