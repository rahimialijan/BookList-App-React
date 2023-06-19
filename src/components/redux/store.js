import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./books/booksSlice";

export const store = configureStore({
  reducer: {
    book: bookSlice,
  },
});
