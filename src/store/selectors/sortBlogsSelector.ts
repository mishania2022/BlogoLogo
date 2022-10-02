import { RootState } from "../store";

export const getSortBlogs = (state: RootState) => state.persistedReducer.sortBlogs;