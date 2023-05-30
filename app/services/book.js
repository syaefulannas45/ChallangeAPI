const Book = require("../api/book/model");

// Metode POST
const createBook = async (req) => {
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.body;

  const book = await Book.create({
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  });

  return book;
};

module.exports = { createBook };
