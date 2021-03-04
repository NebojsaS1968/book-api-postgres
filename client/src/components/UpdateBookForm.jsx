import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Books from "../apis/Books";

const UpdateBookForm = () => {
  const { id } = useParams();
  let history = useHistory();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  // specificly fetching data for this specific book, so if the user goes directly to this url (bookmarks it for example), it won't break, becouse the only component that is fetching data directly from the server is AllBooksTable
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Books.get(`/${id}`);
        setTitle(response.data.data.book.title);
        setAuthor(response.data.data.book.author);
        setYear(response.data.data.book.release_date);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); // [] = dependency array

  // UPDATE handle
  const handleSave = async (e) => {
    e.preventDefault();

    await Books.patch(`/${id}`, {
      title,
      author,
      release_date: year,
    });
    //console.log(updatedBook);
    history.push("/books");
  };

  return (
    <div className="container">
      <form action="">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year of publish</label>
          <input
            type="number"
            className="form-control"
            id="year"
            min="1200"
            max="2021"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSave} className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateBookForm;
