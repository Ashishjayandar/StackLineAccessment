import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import sortingReducer from './sortingSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    sorting: sortingReducer,
  },
});

export default store;
