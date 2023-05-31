const Book = require("../api/book/model");

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

const updateBook = async (req) => {
  const { id } = req.params;
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

  const result = await Book.findOneAndUpdate(
    { _id: id },
    {
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return result;
};

const deleteBook = async (req) => {
  const { id } = req.params;
  const result = await Book.findOne({ _id: id });

  await result.remove();
  return result;
};
module.exports = { createBook, getAllBook, getOneBook, updateBook, deleteBook };
