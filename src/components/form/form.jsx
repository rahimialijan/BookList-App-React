/* eslint-disable react/prop-types */
import './form.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBooks } from '../redux/books/booksSlice';

const Form = ({ booklength }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const addNewBook = (e) => {
    e.preventDefault();
    dispatch(
      addBooks({
        id: booklength + 1,
        title,
        author,
        category,
      }),
    );
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="form-container">
      <h2>ADD NEW BOOK</h2>
      <form className="submit-form" onSubmit={addNewBook}>
        <input
          required
          name="title"
          className="input input-book"
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          required
          name="author"
          className="input input-book"
          type="text"
          placeholder="Book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select
          name="category"
          value={category}
          className="input category-input"
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button className="book-submit-btn" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
