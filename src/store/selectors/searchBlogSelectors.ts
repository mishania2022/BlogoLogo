import { RootState } from "../store";

export const getSearchBlogs = (state: RootState) => state.persistedReducer.searchBlogs;