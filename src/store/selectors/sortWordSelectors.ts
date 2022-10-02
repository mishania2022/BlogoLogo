import { RootState } from "../store";

export const getSortWord = (state: RootState) => state.persistedReducer.sortWord;