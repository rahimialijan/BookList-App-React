// eslint-disable-next-line max-len
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mOn3TNtGJAgtwm69ygNI/books';

export const getBookItems = createAsyncThunk(
  'cart/getBookItems',
  async (thunkAPI) => {
    try {
      const response = await axios(url);
      const books = response.data;
      return books;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const addBooks = createAsyncThunk('books/addBooks', async (book) => {
  await axios.post(`${url}`, {
    item_id: book.id,
    title: book.title,
    category: book.category,
    author: book.author,
  });
  return book;
});

export const deleteBooks = createAsyncThunk(
  'book/deleteBooks',
  async (itemId) => {
    await axios.delete(`${url}/${itemId}`);
    return itemId;
  },
);

export const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      // eslint-disable-next-line max-len
      .addCase(getBookItems.fulfilled, (state, action) => Object.keys(action.payload).map((key) => ({
        id: key,
        title: action.payload[key][0].title,
        author: action.payload[key][0].author,
        category: action.payload[key][0].category,
      })))

      .addCase(addBooks.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      // eslint-disable-next-line max-len
      .addCase(deleteBooks.fulfilled, (state, action) => state.filter((book) => book.id !== action.payload));
  },
});

export default booksSlice.reducer;
