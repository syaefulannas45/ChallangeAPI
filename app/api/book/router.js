const express = require("express");
const router = express();
const { create, index, getOne } = require("./controller");

router.post("/books", create);
router.get("/books", index);
router.get("/books/:id", getOne);

module.exports = router;
