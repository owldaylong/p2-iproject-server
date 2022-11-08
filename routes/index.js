const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controllers");

const register = require("./register");
const login = require("./login");

// ACCOUNTS
router.get("/", Controller.home);
router.use("/register", register);
router.use("/login", login);

module.exports = router;
