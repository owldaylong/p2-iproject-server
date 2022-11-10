const { verifyToken } = require("../helpers/helpers");
const { User } = require("../models");

async function authentication(req, res, next) {
	try {
		console.log(req.headers);
		let access_token = req.headers.access_token;
		if (!access_token) throw { name: "Unauthorized" };

		let payload = verifyToken(access_token);

		let user = await User.findByPk(payload.id);

		if (!user) throw { name: "Unauthorized" };

		req.user = {
			id: user.id,
			email: user.email,
		};
		next();
	} catch (err) {
		console.log(err);
	}
}

module.exports = authentication;
