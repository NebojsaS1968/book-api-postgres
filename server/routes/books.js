const express = require("express");
const router = express.Router();
const booksControl = require("../controllers/books");

const {
  getAllBooks,
  getBookById,
  deleteAllBooks,
  deleteBookById,
  updateBookById,
  addBook,
  getFilteredBooks,
} = booksControl;

router.route("/").get(getAllBooks).post(addBook).delete(deleteAllBooks);

router.route("/filter").get(getFilteredBooks);

router
  .route("/:id")
  .get(getBookById)
  .delete(deleteBookById)
  .patch(updateBookById);

module.exports = router;
