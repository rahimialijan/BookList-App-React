import "./form.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addBook } from "../redux/books/booksSlice";

const Form = ({ booklength }) => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    id: booklength + 1,
    title: "",
    author: "",
    category: "",
    status: "Not Started",
    progress: 0,
    currentChapter: "N/A",
  });

  const addNewBook = (e) => {
    e.preventDefault();
    if (book.title !== "") {
      dispatch(addBook({ id: booklength + 1, ...book }));
      setBook({ title: "", author: "", category: "" });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
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
          value={book.title}
          onChange={handleChange}
        />
        <select
          className="input category-input"
          onChange={handleChange}
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
