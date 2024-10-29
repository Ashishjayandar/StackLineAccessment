import { createSlice } from '@reduxjs/toolkit';
import data from '../../mockData/stackline_frontend_assessment_data_2021.json';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data
  },
  reducers: {
    // Define any actions here if you need to manipulate data later
  },
});

export const selectProductData = (state) => state.product.data;
export default productSlice.reducer;
