import { useState } from "react";
import Homepage from "./home/homepage";
import Form from "./form/form";
import bookList from "./home/bookLists";

const BookStorage = () => {
  return (
    <>
      <Homepage />
      <Form booklength={bookList.length} />
    </>
  );
};

export default BookStorage;
