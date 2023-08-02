import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../auth/loginSlice";
import blogModalToggleReducer from "./blogModalToggleSlice";
import activeBlogReducer from "./activeBlogSlice";
import cartSlice from "./cartSlice";

export const rootReducer = combineReducers({
  login: loginReducer,
  blogModalToggle: blogModalToggleReducer,
  activeBlog: activeBlogReducer,
  cart: cartSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
