import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import AllBooksTable from "../components/AllBooksTable";
import Books from "../apis/Books";
import { useLocation, useHistory } from "react-router-dom";
import { BooksContext } from "../context/BooksContext";

const AllBooks = (props) => {
  const { books, setBooks, isLight } = useContext(BooksContext);

  const changeOptions = async () => {
    const select = document.getElementById("sort");
    const option = select.value;

    switch (option) {
      case "title":
        const response1 = await Books.get(`?title=asc`);
        setBooks(response1.data.data.books);
        break;

      case "author":
        const response2 = await Books.get("?author=asc");
        setBooks(response2.data.data.books);
        break;

      case "date":
        const response3 = await Books.get("?date=asc");
        setBooks(response3.data.data.books);
        break;

      // NEXT NEED TO SHOW IN UI A BTN FOR DESC ORDERING
      default:
        break;
    }
  };

  return (
    <div className={isLight ? "lightTheme" : "darkTheme"}>
      <Navbar />
      <br />
      <h1 className="text-center">All books</h1>
      <div className="form-group float-right mr-5">
        <label htmlFor="sort">Sort by:</label>
        <select
          className="form-control"
          id="sort"
          defaultValue="Options"
          onChange={changeOptions}
        >
          <option value="Options" hidden>
            Options
          </option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="date">Release Date</option>
        </select>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <AllBooksTable />
      </div>
    </div>
  );
};

export default AllBooks;
