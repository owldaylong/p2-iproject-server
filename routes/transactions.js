const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controllers");

router.get("/", Controller.getTransactions);
router.post("/:id", Controller.addTransaction);

module.exports = router;
