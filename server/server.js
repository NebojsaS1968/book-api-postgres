const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Route handlers
const books = require("./routes/books");
app.use("/api/v1/books", books);

// ERRORS
// Error catch for non-existent endpoints
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error); // passing error to the handler below
});

// Error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || "Internal server error",
    },
  });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
