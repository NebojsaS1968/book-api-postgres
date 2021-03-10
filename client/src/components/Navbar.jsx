import React, { useState, useContext } from "react";
import { BooksContext } from "../context/BooksContext";

const Navbar = () => {
  const { toggle } = useContext(BooksContext);

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Books
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">
              Home
            </a>
            <a className="nav-item nav-link" href="/books">
              All Books
            </a>
            <a className="nav-item nav-link" href="/add">
              Add a Book
            </a>
            <a className="nav-item nav-link" href="/about">
              About
            </a>
            <a className="nav-item nav-link" href="#">
              Login
            </a>
          </div>

          <div className="navbar-nav ml-auto">
            <button onClick={toggle} className="nav-item btn btn-primary">
              Toggle Theme
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
