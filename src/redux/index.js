import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import categoriesSlice from './slices/categoriesSlice';
import productSlice from './slices/productSlice';
import userSlice from './slices/userSlice';
import { authMiddleware } from './middlewares/authMiddleware';

export const rootReducer = combineReducers({
  categories: categoriesSlice,
  products: productSlice,
  user: userSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  preloadedState: {
    user: JSON.parse(localStorage.getItem('user') || 'null') ?? undefined,
  },
  reducer: rootReducer,
  middleware: (getMiddleware) => [
    ...getMiddleware(),
    apiSlice.middleware,
    authMiddleware.middleware,
  ],
  devTools: true,
});
