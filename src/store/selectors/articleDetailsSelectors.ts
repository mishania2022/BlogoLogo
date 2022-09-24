import { RootState } from "../store";

export const getDetailsArticles = (state: RootState) => state.persistedReducer.articleDetails;