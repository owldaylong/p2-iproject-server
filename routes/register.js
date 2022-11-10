const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controllers");

router.post("/", Controller.register);

module.exports = router;
