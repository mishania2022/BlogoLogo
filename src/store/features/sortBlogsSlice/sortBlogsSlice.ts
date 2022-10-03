import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { spaceFlyAPI } from "services";
import { IBlog } from "types";

interface BlogsState {
  sortBlogs: IBlog[];
  isLoading: boolean;
  error: null | string;
}

const initialState: BlogsState = {
  sortBlogs: [],
  isLoading: false,
  error: null,
};

const fetchSortBlogs = createAsyncThunk<IBlog[], string | null, { rejectValue: string }>(
  "sortBlogs/fetchSortBlogs",
  async (sort, { rejectWithValue }) => {
    try {
      return await spaceFlyAPI.getSortBlogs(sort);
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
  },
);

const sortBlogsSlice = createSlice({
  name: "sortBlogs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSortBlogs.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSortBlogs.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.sortBlogs = payload;
    });
    builder.addCase(fetchSortBlogs.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default sortBlogsSlice.reducer;
export { fetchSortBlogs };
