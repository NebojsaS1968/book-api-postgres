import React from "react";
import Navbar from "../components/Navbar";
import AllBooksTable from "../components/AllBooksTable";

const AllBooks = () => {
  return (
    <div>
      <Navbar />
      <br />
      <h1 className="text-center">All books</h1>
      <div className="form-group float-right mr-5">
        <label htmlFor="sort">Sort by:</label>
        <select className="form-control" id="sort">
          <option value="asc">Title</option>
          <option value="asc">Author</option>
          <option value="asc">Release Date</option>
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
