const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controllers");

router.get("/", Controller.getUserWeather);

module.exports = router;
