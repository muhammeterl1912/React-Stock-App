import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firms:[],
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
      state.firms = (action.payload);
  
    },

    FirmsFetchFail: (state) => {
      state.loading = false;
      state.error = true;
    }
  }
});

export const { listAll,FirmsfetchStart,FirmsFetchFail } = firmsSlice.actions;

export default firmsSlice.reducer;
 