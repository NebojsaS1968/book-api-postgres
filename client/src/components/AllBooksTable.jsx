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

  const handleDelete = async (id) => {
    try {
      const response = await Books.delete(`/${id}`);
      console.log(response);
      setBooks(
        books.filter((book) => {
          return book.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <table className="table table-striped table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Year of Publish</th>
            <th></th>
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
                  <td>
                    <button className="btn btn-warning">Update</button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AllBooksTable;
