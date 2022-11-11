const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controllers");

router.post("/", Controller.payment);
router.patch("/", Controller.paymentSuccess);

module.exports = router;
