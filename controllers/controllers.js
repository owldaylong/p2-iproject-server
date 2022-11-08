const { User, Beverage, Transaction } = require("../models/index");
const {
	comparePassword,
	createToken,
	verifyToken,
} = require("../helpers/helpers");

class Controller {
	static home(req, res) {
		try {
			res.send("Welcome to Kohihihihi~");
		} catch (err) {
			next(err);
		}
	}
}

module.exports = Controller;
