import React from "react";
import Navbar from "../components/Navbar";
import AllBooksTable from "../components/AllBooksTable";

const AllBooks = () => {
  return (
    <div>
      <Navbar />
      <h1>All books</h1>
      <div className="container">
        <AllBooksTable />
      </div>
    </div>
  );
};

export default AllBooks;
