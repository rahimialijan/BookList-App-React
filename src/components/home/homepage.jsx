import "./homepage.css";
import { useSelector } from "react-redux";
import CartItems from "./cartItems";

const Homepage = () => {
  const { bookList } = useSelector((store) => store.book);
  return (
    <>
      {bookList.map((item) => {
        return <CartItems key={item.id} {...item} />;
      })}
    </>
  );
};

export default Homepage;
