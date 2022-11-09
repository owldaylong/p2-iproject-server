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

	static async getAllBeverages(req, res, next) {
		// pagination
		let options = {
			attributes: {
				exclude: [, "createdAt", "updatedAt"],
			},
		};
		let limit;
		let offset;
		let totalPage;
		let { page } = req.query;
		if (page !== "" && typeof page !== "undefined") {
			limit = 9;
			options.limit = limit;
			if (page.number !== "" && typeof page.number !== "undefined") {
				offset = page.number * limit - limit;
				options.offset = offset;
			}
		} else {
			limit = 9; // limit 9 items
			offset = 0;
			totalPage = 1;
			options.limit = limit;
			options.offset = offset;
		}

		if (!page) {
			page = {};
			totalPage = 1;
			page.number = 1;
		}
		try {
			const beverages = await Beverage.findAndCountAll(options);

			beverages.totalPage = Math.ceil(beverages.count / limit);
			beverages.currentPage = page.number ? page.number : 0;
			res.status(200).json(beverages);
		} catch (err) {
			console.log(err);
		}
	}
}

module.exports = Controller;
