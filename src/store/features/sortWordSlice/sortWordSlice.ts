import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  sortWord: null | string;
}

const initialState: UserState = {
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
