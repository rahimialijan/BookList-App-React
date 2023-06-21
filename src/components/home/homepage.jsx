import './homepage.css';
import { useSelector } from 'react-redux';
import CartItems from './cartItems';
import Form from '../form/form';

const Homepage = () => {
  const books = useSelector((state) => state.books);

  return (
    <>
      {books.map((book) => (
        <CartItems key={book.id} book={book} />
      ))}
      <Form booklength={books.length} />
    </>
  );
};

export default Homepage;
