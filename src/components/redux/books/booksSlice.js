import { createSlice } from "@reduxjs/toolkit";
import bookList from "../../home/bookLists";

const initialState = {
  bookList: bookList,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.bookList.push(newBook);
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      state.bookList = state.bookList.filter((item) => item.id !== itemId);
    },
  },
});

export const { removeBook, addBook } = bookSlice.actions;
export default bookSlice.reducer;
