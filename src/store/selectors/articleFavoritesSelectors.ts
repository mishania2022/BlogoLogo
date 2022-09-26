import { RootState } from "../store";

export const getFavoritesArticles = (state: RootState) => state.persistedReducer.favoritesArticles;