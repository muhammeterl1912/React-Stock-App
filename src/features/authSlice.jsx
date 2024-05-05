import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  token: "",
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: ({ loading }) => {
      loading = true;
    },
  },
  loginSuccess: ({ user, loading, token }, { payload }) => {
    loading = false;
    user = payload.user.username;
    token = payload.token;
  },
  fetchFail:({loading,error})=>{
    loading = false
    error = true
  }
});

export const { fetchStart, loginSuccess, fetchFail } = authSlice.actions;
export default authSlice.reducer;
