const mongoose = require("mongoose");

let bookShelf = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    year: {
      type: Number,
    },
    author: {
      type: String,
    },
    summary: {
      type: String,
    },
    publisher: {
      type: String,
    },
    pageCount: {
      type: Number,
    },
    readPage: {
      type: Number,
    },
    reading: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookShelf);
