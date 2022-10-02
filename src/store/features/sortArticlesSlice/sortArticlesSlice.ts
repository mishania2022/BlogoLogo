import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { spaceFlyAPI } from "../../../services";
import { IArticle } from "../../../types";

interface ArticlesState {
  sortArticles: IArticle[];
  isLoading: boolean;
  error: null | string;
}

const initialState: ArticlesState = {
  sortArticles: [],
  isLoading: false,
  error: null,
};

const fetchSortArticles = createAsyncThunk<IArticle[], string | null, { rejectValue: string }>(
  "sortArticles/fetchSortArticles",
  async (sort, { rejectWithValue }) => {
    try {
      return await spaceFlyAPI.getSortArticles(sort);
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
  },
);

const sortArticlesSlice = createSlice({
  name: "sortArticles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSortArticles.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSortArticles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.sortArticles = payload;
    });
    builder.addCase(fetchSortArticles.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default sortArticlesSlice.reducer;
export { fetchSortArticles };
