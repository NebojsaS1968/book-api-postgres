import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
            <a className="nav-item nav-link" href="/about">
              About
            </a>
            <a className="nav-item nav-link disabled" href="#">
              Login
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
