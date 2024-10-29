import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import data from '../../mockData/stackline_frontend_assessment_data_2021.json';

export const fetchProductData = createAsyncThunk("products/fetchProductData", async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data); // Simulates fetching data from an API
    }, 1000); // 1-second delay
  });
});

const productSlice = createSlice({
  name: "product",
  initialState: { data: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProductData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectProductData = (state) => state.product.data;
export default productSlice.reducer;
