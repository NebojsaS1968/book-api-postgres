const db = require("../db/index");

const getAllBooks = async (req, res, next) => {
  const { date, title, author } = req.query;
  // SORT BY REL_DATE
  if (date === "asc") {
    const result = await db.query(
      "SELECT * FROM book ORDER BY release_date ASC"
    );
    return res.status(200).json({
      status: 200,
      results: result.rows.length,
      data: {
        books: result.rows,
      },
    });
  } else if (date === "desc") {
    const result = await db.query(
      "SELECT * FROM book ORDER BY release_date DESC"
    );
    return res.status(200).json({
      status: 200,
      results: result.rows.length,
      data: {
        books: result.rows,
      },
    });
  }

  // SORT BY TITLE
  if (title === "asc") {
    const result = await db.query("SELECT * FROM book ORDER BY title ASC");
    return res.status(200).json({
      status: 200,
      results: result.rows.length,
      data: {
        books: result.rows,
      },
    });
  } else if (title === "desc") {
    const result = await db.query("SELECT * FROM book ORDER BY title DESC");
    return res.status(200).json({
      status: 200,
      results: result.rows.length,
      data: {
        books: result.rows,
      },
    });
  }

  // SORT BY AUTHOR
  if (author === "asc") {
    const result = await db.query("SELECT * FROM book ORDER BY author ASC");
    return res.status(200).json({
      status: 200,
      results: result.rows.length,
      data: {
        books: result.rows,
      },
    });
  } else if (author === "desc") {
    const result = await db.query("SELECT * FROM book ORDER BY author DESC");
    return res.status(200).json({
      status: 200,
      results: result.rows.length,
      data: {
        books: result.rows,
      },
    });
  }

  // NO QUERY PARAMS || DEFAULT
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
  // need to check if database contains an id put into the URL by looping through all rows and pulling the id value and compare / if no id throw an error
  // TO DO
  res.status(200).json({
    status: 200,
    data: {
      book: result.rows[0],
    },
  });
};

// Add Book
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

// Delete Book
const deleteBookById = async (req, res, next) => {
  const { id } = req.params;
  db.query("DELETE FROM book WHERE id = $1", [id]);

  res.status(200).json({
    response: "Entry deleted",
  });
};

// Delete All Books
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

// Get Filter
const getFilteredBooks = async (req, res, next) => {
  const { author, year } = req.query;

  // FILTER BY AUTHOR
  if (author && author !== "") {
    // else if(author === ""){}
    //console.log(author);
    const result = await db.query("SELECT * FROM book WHERE author = $1", [
      author,
    ]);
    return res.status(200).json({
      status: 200,
      results: result.rows.length,
      filtered_by: author,
      data: {
        books: result.rows,
      },
    });
  }

  //FILTER BY REL_DATE
  if (year) {
    // else if(year === ""){}
    const result = await db.query(
      "SELECT * FROM book WHERE release_date = $1",
      [year]
    );
    return res.status(200).json({
      status: 200,
      results: result.rows.length,
      filtered_by: year,
      data: {
        books: result.rows,
      },
    });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  deleteAllBooks,
  deleteBookById,
  updateBookById,
  getFilteredBooks,
};
