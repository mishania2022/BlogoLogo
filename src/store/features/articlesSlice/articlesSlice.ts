import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { spaceFlyAPI } from "../../../services";
import { IArticle } from "../../../types";

interface ArticlesState {
  articles: IArticle[];
  isLoading: boolean;
  error: null | string;
}

const initialState: ArticlesState = {
  articles: [],
  isLoading: false,
  error: null,
};

const fetchArticles = createAsyncThunk<IArticle[], undefined, { rejectValue: string }>(
  "articles/fetchArticles",
  async (_, { rejectWithValue }) => {
    try {
      return await spaceFlyAPI.getAllArticles();
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
  },
);

const fetchArticlesByPage = createAsyncThunk<IArticle[], number, { rejectValue: string }>(
  "articles/fetchArticlesByPage",
  async (page, { rejectWithValue }) => {
    try {
      return await spaceFlyAPI.getArticlesByPage(page);
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
  },
);

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

    builder.addCase(fetchArticlesByPage.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchArticlesByPage.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.articles = payload;
    });
    builder.addCase(fetchArticlesByPage.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
}
);

export default articlesSlice.reducer;
export { fetchArticles, fetchArticlesByPage };
