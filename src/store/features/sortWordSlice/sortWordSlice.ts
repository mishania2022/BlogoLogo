import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WordState {
  sortWord: null | string;
}

const initialState: WordState = {
  sortWord: null,
};

const sortWordSlice = createSlice({
  name: "sortWord",
  initialState,
  reducers: {
    setSortWord(state, action: PayloadAction<string>) {
      state.sortWord = action.payload;
    },
  },
});

export const { setSortWord } = sortWordSlice.actions;
export default sortWordSlice.reducer;
