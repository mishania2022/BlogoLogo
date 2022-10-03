import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spaceFlyAPI } from "services";
import { IBlog } from "types/index";
import { AxiosError } from "axios";

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
    return await spaceFlyAPI.getAllBlogs();
  },
);

const fetchBlogsByPage = createAsyncThunk<IBlog[], number, { rejectValue: string }>(
  "blogs/fetchBlogsByPage",
  async (page, { rejectWithValue }) => {
    try {
      return await spaceFlyAPI.getBlogsByPage(page);
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
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

    builder.addCase(fetchBlogsByPage.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBlogsByPage.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.blogs = payload;
    });
    builder.addCase(fetchBlogsByPage.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default blogsSlice.reducer;
export { fetchBlogs, fetchBlogsByPage };
