import { RootState } from "../store";

export const getDetailsBlogs = (state: RootState) => state.persistedReducer.blogDetails;