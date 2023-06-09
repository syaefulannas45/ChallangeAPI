const express = require("express");
const router = express();
const { create, index, getOne, update, destroy } = require("./controller");

router.post("/books", create);
router.get("/books", index);
router.get("/books/:id", getOne);
router.put("/books/:id", update);
router.delete("/books/:id", destroy);

module.exports = router;
