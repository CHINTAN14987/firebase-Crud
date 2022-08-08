import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  email: "",
  photo: "",
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOut: (state, action) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export default loginSlice.reducer;
export const loginAction = loginSlice.actions;
