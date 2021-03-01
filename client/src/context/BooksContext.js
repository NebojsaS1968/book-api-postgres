import React, { useState, createContext } from "react";

export const BooksContext = createContext();

export const BooksContextProvider = (props) => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <BooksContext.Provider value={{ books, setBooks, addBook }}>
      {props.children}
    </BooksContext.Provider>
  );
};
