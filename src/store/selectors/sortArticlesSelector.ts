import { RootState } from "../store";

export const getSortArticles = (state: RootState) => state.persistedReducer.sortArticles;