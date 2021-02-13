const express = require("express");
require("dotenv").config();
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Route handlers
const books = require("./routes/books");
app.use("/api/v1/books", books);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
