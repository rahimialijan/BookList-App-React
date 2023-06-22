/* eslint-disable react/prop-types */
import './cartItems.css';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { deleteBooks } from '../redux/books/booksSlice';

const CartItems = ({ book }) => {
  const dispatch = useDispatch();
  const bookState = useState(book)[0];
  const [randomNumber, setRandomNumber] = useState();

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 34) + 51);
  });

  return (
    <div className="book-list-container">
      <div className="book-info">
        <h2 className="book-category">{bookState.category}</h2>
        <h3 className="book-title">{bookState.title}</h3>
        <h6 className="book-author">{bookState.author}</h6>
        <div className="book-actions">
          <button className="book-action-button" type="submit">
            Comments
          </button>
          <div className="vertical-line" />
          <button
            type="button"
            className="book-action-button"
            onClick={() => {
              dispatch(deleteBooks(bookState.id));
            }}
          >
            Remove
          </button>
          <div className="vertical-line" />
          <button className="book-action-button" type="submit">
            Edit
          </button>
        </div>
      </div>
      <div className="progress-section">
        <div className="circular-progress-container">
          <div className="circular-progress" />
        </div>
        <div className="progress-stat">
          <p className="percent-complete">
            {randomNumber}
            %
          </p>
          <p className="completed">Completed</p>
        </div>
        <div className="vertical-line progress-line" />
        <div className="current-chapter-container">
          <div>
            <p className="current-chapter-label">CURRENT CHAPTER</p>
            <p className="current-chapter">
              Chapter 3: &quot;A Lesson Learned&quot;
            </p>
          </div>
          <div>
            <button className="primary-button" type="button">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
