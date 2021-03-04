import React, { useEffect, useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import Books from "../apis/Books";

const BookDetails = (props) => {
  const { selectedBook, setSelectedBook } = useContext(BooksContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Books.get(`/${id}`);
        setSelectedBook(response.data.data.book);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <h1 className="text-center">
        {selectedBook.title} ({selectedBook.release_date})
      </h1>
      <br />
      <div className="container">
        <h4>Author: {selectedBook.author}</h4>
      </div>
    </>
  );
};

export default BookDetails;
