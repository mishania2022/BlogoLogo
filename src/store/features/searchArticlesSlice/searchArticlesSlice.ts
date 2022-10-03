import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { spaceFlyAPI } from "services";
import { IArticle } from "types";

interface ArticlesState {
  searchArticles: IArticle[];
  isLoading: boolean;
  error: null | string;
}

const initialState: ArticlesState = {
  searchArticles: [],
  isLoading: false,
  error: null,
};


const fetchSearchArticles = createAsyncThunk<IArticle[], string, { rejectValue: string }>(
  "searchArticles/fetchSearchArticles",
  async (word, { rejectWithValue }) => {
    try {
      return await spaceFlyAPI.getSearchArticles(word);
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
  },
);

const searchArticlesSlice = createSlice({
  name: "searchArticles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSearchArticles.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSearchArticles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.searchArticles = payload;
    });
    builder.addCase(fetchSearchArticles.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default searchArticlesSlice.reducer;
export { fetchSearchArticles };