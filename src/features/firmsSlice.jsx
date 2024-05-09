import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firms: [],
  loading: false,
  error: false,
};

const firmsSlice = createSlice({
  name: "firms",
  initialState,
  reducers: {
    FirmsfetchStart: (state) => {
      state.loading = true;
    },
    listAll: (state, action) => {
      state.firms = action.payload;
    },
    deleteFirmSuccess: (state, { payload }) => {
      state.loading = false;
      state.firms = payload.data;
    },

    FirmsFetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    createFirmSuccess: (state, { payload }) => {
      state.loading = false;
      state.firms.push(payload.data);
    },
  },
});

export const {
  listAll,
  FirmsfetchStart,
  FirmsFetchFail,
  deleteFirmSuccess,
  createFirmSuccess,
} = firmsSlice.actions;

export default firmsSlice.reducer;
