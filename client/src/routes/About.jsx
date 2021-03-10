import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { BooksContext } from "../context/BooksContext";

const About = () => {
  const { isLight } = useContext(BooksContext);

  return (
    <div className={isLight ? "lightTheme" : "darkTheme"}>
      <Navbar />
      <h1>About page</h1>
    </div>
  );
};

export default About;
