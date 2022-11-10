const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controllers");

router.post("/", Controller.login);

module.exports = router;
