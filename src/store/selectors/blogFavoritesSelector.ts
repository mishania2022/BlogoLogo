import { RootState } from "../store";

export const getFavoritesBlogs = (state: RootState) => state.persistedReducer.favoritesBlogs;