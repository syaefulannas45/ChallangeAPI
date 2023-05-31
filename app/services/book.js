const { json } = require("express");
const Book = require("../api/book/model");

// Metode POST
const createBook = async (req) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = req.body;

  const book = await Book.create({
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished: pageCount === readPage ? true : false,
  });

  return book;
};

const getAllBook = async () => {
  const result = await Book.find().select("_id name publisher");

  return result;
};

const getOneBook = async (req) => {
  const { id } = req.params;
  const result = await Book.findOne({ _id: id });

  return result;
};

module.exports = { createBook, getAllBook, getOneBook };
