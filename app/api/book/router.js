const express = require("express");
const router = express();
const { create } = require("./controller");

router.post("/books", create);

module.exports = router;
