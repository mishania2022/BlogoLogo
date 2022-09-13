import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { articleAPI } from "../../../services/articleAPI";
import { IArticle } from "../../../types";

interface ArticlesState {
  articles: any[];
  isLoading: boolean;
  error: null | string;
}

const initialState: ArticlesState = {
  articles: [],
  isLoading: false,
  error: null,
};

const fetchArticles = createAsyncThunk<
  IArticle[],
  undefined,
  { rejectValue: string }
>("articles/fetchArticles", async (_, { rejectWithValue }) => {
  try {
    return await articleAPI.getAllArticles();
  } catch (error) {
    const AxiosError = error as AxiosError;
    return rejectWithValue(AxiosError.message);
  }
});

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.articles = payload;
    });
    builder.addCase(fetchArticles.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default articlesSlice.reducer;
export { fetchArticles };
