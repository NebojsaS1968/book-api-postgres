import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Books from "../apis/Books";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Books.post("/", {
        title,
        author,
        release_date: year,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <br />
      <div className="container">
        <form action="" className="needs-validation" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <br />
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Year of Publishing"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <br />
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
