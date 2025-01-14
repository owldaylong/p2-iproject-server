const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controllers");

const register = require("./register");
const login = require("./login");
const googleLogin = require("./google-login");
const beverages = require("./beverages");
const transactions = require("./transactions");
const weather = require("./weather");
const payment = require("./payment");

const authentication = require("../middlewares/authentication");

// ACCOUNTS
router.get("/", Controller.home);
router.use("/register", register);
router.use("/login", login);
router.use("/google-login", googleLogin);

// MAIN INTERFACE - CONSUMER
router.use("/beverages", beverages);
router.use("/weather", weather);

router.use(authentication);
router.use("/transactions", transactions);
router.use("/payment", payment);

module.exports = router;
