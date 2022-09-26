import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "../../../types";

interface IFavoritesState {
  favoritesArticles: IArticle[];
}

const initialState: IFavoritesState = {
  favoritesArticles: [],
};

const favoritesArticlesSlice = createSlice({
  name: "favoritesArticles",
  initialState,
  reducers: {
    addToFavorites(state, { payload }: PayloadAction<IArticle>) {
      const result = state.favoritesArticles.find((article) => article.id === payload.id);
      if (!result) state.favoritesArticles.push(payload);
    },
    removeFavorite(state, { payload }: PayloadAction<number>) {
      state.favoritesArticles = state.favoritesArticles.filter((article) => {
        return article.id !== payload;
      });
    },
  },
});

export default favoritesArticlesSlice.reducer;

// eslint-disable-next-line max-len
export const { addToFavorites, removeFavorite } =
  favoritesArticlesSlice.actions;
