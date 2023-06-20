import './homepage.css';
import { useSelector } from 'react-redux';
import CartItems from './cartItems';
import Form from '../form/form';

const Homepage = () => {
  const { bookList } = useSelector((store) => store.book);
  return (
    <>
      {bookList.map((item) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <CartItems key={item.id} {...item} />
      ))}
      <Form booklength={bookList.length} />
    </>
  );
};

export default Homepage;
