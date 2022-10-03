import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "types";

interface IFavoritesState {
  favoritesBlogs: IArticle[];
}

const initialState: IFavoritesState = {
  favoritesBlogs: [],
};

const favoritesBlogsSlice = createSlice({
  name: "favoritesBlogs",
  initialState,
  reducers: {
    addToFavoritesBlog(state, { payload }: PayloadAction<IArticle>) {
      const result = state.favoritesBlogs.find((blog) => blog.id === payload.id);
      if (!result) state.favoritesBlogs.push(payload);
    },
    removeFavoriteBlog(state, { payload }: PayloadAction<number>) {
      state.favoritesBlogs = state.favoritesBlogs.filter((blog) => {
        return blog.id !== payload;
      });
    },
  },
});

export default favoritesBlogsSlice.reducer;

// eslint-disable-next-line max-len
export const { addToFavoritesBlog, removeFavoriteBlog } = favoritesBlogsSlice.actions;
