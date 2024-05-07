import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import firmsReducer from "../features/firmsSlice"
const store = configureStore({
  reducer: {
    auth: authReducer,
    firms:firmsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
