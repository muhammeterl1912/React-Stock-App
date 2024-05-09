import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    brands: [],
    loading: false,
    error: false,
  };

const brandsSlice = createSlice({
  name:"brands",
  initialState,
  reducers: {
    listAllBrands: (state, action) => {
        state.brands = action.payload;
      },
  }
});

export const {listAllBrands} = brandsSlice.actions

export default brandsSlice.reducer