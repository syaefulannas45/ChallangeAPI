const mongoose = require("mongoose");

let bookShelf = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
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
    finished: {
      type: Boolean,
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
