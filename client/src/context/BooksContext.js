import React, { useState, createContext } from "react";

export const BooksContext = createContext();

export const BooksContextProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <BooksContext.Provider
      value={{ books, setBooks, addBook, selectedBook, setSelectedBook }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};
