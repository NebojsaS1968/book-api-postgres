import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { BooksContext } from "../context/BooksContext";

const Home = () => {
  const { isLight } = useContext(BooksContext);

  return (
    <div className={isLight ? "lightTheme" : "darkTheme"}>
      <Navbar />
      <h1>Best place to find your new favourite book!</h1>
      <br />
    </div>
  );
};

export default Home;
