import React, { useEffect, useContext } from "react";
import { BooksContext } from "../context/BooksContext";

const BookDetails = () => {
  const { books, setBooks } = useContext(BooksContext);

  return <div>Book Details</div>;
};

export default BookDetails;
