const { createBook, getAllBook, getOneBook } = require("../../services/book");

const create = async (req, res) => {
  try {
    const result = await createBook(req);
    res.status(201).json({
      status: "succes",
      message: "Buku berhasil ditambahkan",
      data: {
        bookId: result._id,
      },
    });
  } catch (err) {
    res.status(400).json({
      msg: "Harap diisi dengan lengkap",
    });
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getAllBook();
    res.status(200).json({
      status: "succes",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res) => {
  try {
    const result = await getOneBook(req);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Buku tidak ditemukan",
    });
  }
};

module.exports = { create, index, getOne };
