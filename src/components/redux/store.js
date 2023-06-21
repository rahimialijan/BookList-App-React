import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: bookSlice,
    categories: categoriesReducer,
  },
});
export default store;
