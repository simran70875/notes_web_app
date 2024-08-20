// rootReducer.js
import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import noteReducer  from "../reducers/noteSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  getNotes: noteReducer ,
});

export default rootReducer;
