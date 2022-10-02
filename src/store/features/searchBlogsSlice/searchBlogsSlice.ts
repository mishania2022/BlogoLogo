import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { spaceFlyAPI } from "../../../services";
import { IBlog } from "../../../types";

interface BlogsState {
  searchBlogs: IBlog[];
  isLoading: boolean;
  error: null | string;
}

const initialState: BlogsState = {
  searchBlogs: [],
  isLoading: false,
  error: null,
};


const fetchSearchBlogs = createAsyncThunk<IBlog[], string, { rejectValue: string }>(
  "searchBlogs/fetchSearchBlogs",
  async (word, { rejectWithValue }) => {
    try {
      return await spaceFlyAPI.getSearchBlogs(word);
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
  },
);

const searchBlogsSlice = createSlice({
  name: "searchBlogs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSearchBlogs.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSearchBlogs.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.searchBlogs = payload;
    });
    builder.addCase(fetchSearchBlogs.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default searchBlogsSlice.reducer;
export { fetchSearchBlogs };