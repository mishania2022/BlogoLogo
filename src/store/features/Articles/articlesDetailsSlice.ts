import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { articleAPI } from "../../../services/articleAPI";
import { IArticle } from "../../../types";
import { AxiosError } from "axios";

export const fetchArticleByDetails = createAsyncThunk<IArticle, string, { rejectValue: string }>(
  "articleDetails/fetchArticleByDetails",
  async (id = "",{ rejectWithValue } ) => {
    try {
      return await articleAPI.getDetailsById(id);
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
  },
);

interface IArticleDetailState {
  isLoading: boolean;
  error: null | string;
  details: IArticle | null;
}

const initialState: IArticleDetailState = {
  isLoading: false,
  error: null,
  details: null,
};

const articleDetailsSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticleByDetails.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchArticleByDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.details = payload;
    });
    builder.addCase(fetchArticleByDetails.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = null;
      }
    });
  },
});

export default articleDetailsSlice.reducer;
