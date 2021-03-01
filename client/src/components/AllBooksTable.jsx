import React, { useEffect, useContext } from "react";
import Books from "../apis/Books";
import { BooksContext } from "../context/BooksContext";

const AllBooksTable = () => {
  // useContext is used to get you context API to work
  const { books, setBooks } = useContext(BooksContext);

  // useEffect is used to load data before page rendering. It does not return anything, it need another method inside to return it for her.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Books.get("/");
        setBooks(response.data.data.books);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table className="table table-striped table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Year of Publish</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              return (
                <tr key={book.id}>
                  <td>
                    <a href={`/books/${book.id}`}>{book.title}</a>
                  </td>
                  <td>{book.author}</td>
                  <td>{book.release_date}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AllBooksTable;
