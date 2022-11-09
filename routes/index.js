const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controllers");

const register = require("./register");
const login = require("./login");
const beverages = require("./beverages");
const authentication = require("../middlewares/authentication");

// ACCOUNTS
router.get("/", Controller.home);
router.use("/register", register);
router.use("/login", login);

// MAIN INTERFACE - CONSUMER

router.use(authentication);

module.exports = router;
