import {
  setLocalStorageItem,
  removeLocalStorageItem,
} from "../utils/localStorageUtils";

export const LoginMiddleware = (store) => (next) => (action) => {
  if (action.type === "LOGIN_SUCCESS") {
    const { userid } = action.payload;
    setLocalStorageItem("isLoggedIn", true);
    setLocalStorageItem("userid", userid);
  }
  return next(action);
};

export const LogoutMiddleware = (store) => (next) => (action) => {
  if (action.type === "LOGOUT") {
    removeLocalStorageItem("isLoggedIn");
    removeLocalStorageItem("userid");
  }
  return next(action);
};
