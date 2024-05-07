import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firms:[],
  loading:false,
};

const firmsSlice = createSlice({
  name: "firms",
  initialState,
  reducers: {
    listAll: (state, action) => {
      state.firms = (action.payload);
      console.log(`sliceeee ${action.payload}`)
    }
  }
});

export const { listAll } = firmsSlice.actions;

export default firmsSlice.reducer;
 