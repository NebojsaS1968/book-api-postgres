import React, { useState, createContext } from "react";

export const BooksContext = createContext();

export const BooksContextProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState([]);
  const [isLight, setIsLight] = useState(true);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const toggle = () => {
    setIsLight(!isLight);
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        setBooks,
        addBook,
        selectedBook,
        setSelectedBook,
        isLight,
        setIsLight,
        toggle,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};
