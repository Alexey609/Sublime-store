import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import categoriesSlice from './slices/categoriesSlice';
import productSlice from './slices/productSlice';
import userSlice from './slices/userSlice';

export const rootReducer = combineReducers({
  categories: categoriesSlice,
  products: productSlice,
  user: userSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
