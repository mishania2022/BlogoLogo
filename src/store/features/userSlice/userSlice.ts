import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: null | string;
  isAuth: false;
  name: null;
  surname: null;
  email: null | string;
  password: null;
}

const initialState: UserState = {
  id: null,
  isAuth: false,
  name: null,
  surname: null,
  email: null,
  password: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    generateRandomId(state) {
      state.id = nanoid();
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
  },
});

export const { generateRandomId, setEmail } = userSlice.actions;
export default userSlice.reducer;
