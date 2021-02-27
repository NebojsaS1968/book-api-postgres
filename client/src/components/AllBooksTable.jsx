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
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Year of Publish</th>
            {/* <th scope="col">Ratings</th> */}
            {/* <th scope="col">Price</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllBooksTable;
