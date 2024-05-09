import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import firmsReducer from "../features/firmsSlice"
import brandsReducer from "../features/brandsSlice"
const store = configureStore({
  reducer: {
    auth: authReducer,
    firms:firmsReducer,
    brands:brandsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
