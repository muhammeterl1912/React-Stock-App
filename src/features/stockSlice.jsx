import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  purchases: [],
  sales: [],
  firms: [],
  products: [],
  brands: [],
  categories: [],
  loading: false,
  error: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },

    getStockSuccess: (state, { payload: { path, stockData } }) => {
      state.loading = false;
      state[path] = stockData;
    },
    getProdPurcBranFirmSuccess: (
      state,
      { payload: { products, purchases, firms, brands } }
    ) => {
      state.loading = false;
      state.products = products;
      state.purchases = purchases;
      state.brands = brands;
      state.firms = firms;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getStockSuccess,
  fetchFail,
  getProdPurcBranFirmSuccess,
} = stockSlice.actions;

export default stockSlice.reducer;
