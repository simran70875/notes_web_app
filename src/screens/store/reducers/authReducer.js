import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  userid: localStorage.getItem("userid") || null,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.userid = action.payload.userid;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userid = null;
    },
  },
});
export const { loginSuccess, logout } = authReducer.actions;
export default authReducer.reducer;
