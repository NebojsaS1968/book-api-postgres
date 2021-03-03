import React from "react";
import Navbar from "../components/Navbar";
import UpdateBookForm from "../components/UpdateBookForm";

const UpdateBook = () => {
  return (
    <>
      <Navbar />
      <br />
      <h1 className="text-center">Update book</h1>
      <br />
      <UpdateBookForm />
    </>
  );
};

export default UpdateBook;
