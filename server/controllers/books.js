const db = require("../db/index");

const getAllBooks = async (req, res, next) => {
  const result = await db.query("SELECT * FROM book");

  res.status(200).json({
    status: 200,
    results: result.rows.length,
    data: {
      books: result.rows,
    },
  });
};

const getBookById = async (req, res, next) => {
  const { id } = req.params;
  const result = await db.query("SELECT * FROM book WHERE id = $1", [id]);
  // TO DO
  // need to check if database contains an id put into the URL by looping through all rows and pulling the id value and compare
  // TO DO
  res.status(200).json({
    status: 200,
    data: {
      book: result.rows[0],
    },
  });
};

const addBook = async (req, res, next) => {
  const title = req.body.title;
  const author = req.body.author;
  const release_date = req.body.release_date;

  const result = await db.query(
    "INSERT INTO book (title, author, release_date) VALUES ($1, $2, $3) RETURNING *",
    [title, author, release_date]
  );

  res.status(201).json({
    status: 201,
    data: {
      newBook: result.rows[0],
    },
  });
};

const deleteBookById = async (req, res, next) => {
  const { id } = req.params;
  db.query("DELETE FROM book WHERE id = $1", [id]);

  res.status(200).json({
    response: "Entry deleted",
  });
};

const deleteAllBooks = async (req, res, next) => {
  db.query("DELETE FROM book");

  res.status(200).json({
    response: "Book table is now empty",
  });
};

// HELPER FUNCTION FOR UPDATING MULTIPLE COLUMNS
function updateHelper(id, cols) {
  // Setup static beginning of query
  let query = ["UPDATE book"];
  query.push("SET");

  // Create another array storing each set command and each new column to be updated
  // and assigning a number value for parameterized query
  let set = [];
  Object.keys(cols).forEach((key, i) => {
    set.push(key + " = ($" + (i + 1) + ")");
  });
  query.push(set.join(", "));

  // Add the WHERE statement to look up by id
  query.push("WHERE id = " + id + "RETURNING *");

  // Return a complete query string
  return query.join(" ");
}

const updateBookById = async (req, res, next) => {
  const { id } = req.params;

  let query = updateHelper(id, req.body);

  // Turn req.body into an array of values
  const colValues = Object.keys(req.body).map((key) => {
    return req.body[key];
  });

  const result = await db.query(query, colValues);

  res.status(200).json({
    status: 200,
    data: {
      updatedBook: result.rows[0],
    },
  });
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  deleteAllBooks,
  deleteBookById,
  updateBookById,
};
