import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IArticle, IBlog } from "types";
import { AxiosError } from "axios";
import { spaceFlyAPI } from "services";

export const fetchBlogByDetails = createAsyncThunk<IArticle, string, { rejectValue: string }>(
  "blogDetails/fetchBlogByDetails",
  async (id = "", { rejectWithValue }) => {
    try {
      return await spaceFlyAPI.getDetailsById(id);
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
  },
);

interface IBlogDetailState {
  isLoading: boolean;
  error: null | string;
  details: IBlog | null;
}

const initialState: IBlogDetailState = {
  isLoading: false,
  error: null,
  details: null,
};

const blogDetailsSlice = createSlice({
  name: "blogDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBlogByDetails.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchBlogByDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.details = payload;
    });
    builder.addCase(fetchBlogByDetails.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = null;
      }
    });
  },
});

export default blogDetailsSlice.reducer;
