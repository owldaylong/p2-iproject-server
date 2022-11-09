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

	static async register(req, res, next) {
		try {
			let { username, email, password } = req.body;
			let createdUser = await User.create({
				username,
				email,
				password,
			});

			res.status(201).json({
				id: createdUser.id,
				email: createdUser.email,
			});
		} catch (err) {
			console.log(err);
		}
	}

	static async login(req, res, next) {
		try {
			let { email, password } = req.body;

			if (!email || !password) throw { name: "Bad Request" };

			let findUser = await User.findOne({ where: { email } });

			if (!findUser) throw { name: "Unauthorized" };

			const comparedPassword = comparePassword(password, findUser.password);

			if (!comparedPassword) throw { name: "Unauthorized" };

			const payload = {
				id: findUser.id,
				role: findUser.role,
			};

			const access_token = createToken(payload);

			res
				.status(200)
				.json({ access_token, role: findUser.role, email: findUser.email });
		} catch (err) {
			console.log(err);
		}
	}
}

module.exports = Controller;
