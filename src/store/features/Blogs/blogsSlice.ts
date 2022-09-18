import { async } from "@firebase/util";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { blogAPI } from "../../../services/blogAPI";
import { IBlog } from "../../../types/index";

interface BlogsState {
  blogs: IBlog[];
  isLoading: boolean;
  error: null | string;
}

const initialState: BlogsState = {
  blogs: [],
  isLoading: false,
  error: null,
};

const fetchBlogs = createAsyncThunk<IBlog[], undefined, { rejectValue: string }>(
  "blogs/fetchBlogs",
  async () => {
    return await blogAPI.getAllBlogs();
  },
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBlogs.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.blogs = payload;
    });
    builder.addCase(fetchBlogs.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default blogsSlice.reducer;
export { fetchBlogs };
