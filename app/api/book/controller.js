const {
  createBook,
  getAllBook,
  getOneBook,
  updateBook,
  deleteBook,
} = require("../../services/book");
const Book = require("./model");

const create = async (req, res, next) => {
  try {
    const result = await createBook(req);
    if (result.readPage > result.pageCount) {
      res.status(400).json({
        status: "fail",
        message:
          "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
      });
    } else {
      res.status(201).json({
        status: "succes",
        message: "Buku berhasil ditambahkan",
        data: {
          bookId: result._id,
        },
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Gagal menambah buku. Mohon isi nama buku",
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

const update = async (req, res, next) => {
  try {
    await updateBook(req);

    res.json({
      status: "succes",
      message: "Buku berhasil diperbarui",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Gagal memperbarui buku, id tidak ditemukan",
    });
  }
};

const destroy = async (req, res) => {
  try {
    await deleteBook(req);
    res.json({
      status: "succes",
      message: "Buku berhasil dihapus",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Gagal memperbarui buku, id tidak ditemukan",
    });
  }
};

module.exports = { create, index, getOne, update ,destroy};
