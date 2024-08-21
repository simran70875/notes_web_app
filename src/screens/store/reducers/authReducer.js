import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  userid: localStorage.getItem("userid") || null,
  username : localStorage.getItem("username") || null,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.userid = action.payload.userid;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = null;
      state.userid = null;
    },
  },
});
export const { loginSuccess, logout } = authReducer.actions;
export default authReducer.reducer;
