const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controllers");

router.post("/", Controller.loginGoogle);

module.exports = router;
