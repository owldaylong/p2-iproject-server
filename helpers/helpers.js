const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const SECRET = "kamunanyeak?";

// bcrypt - hashing password

const hashPassword = (password) => bcrypt.hashSync(password);
const comparePassword = (password, hashedPassword) =>
	bcrypt.compareSync(password, hashedPassword);

// jsonwebtoken

const createToken = (payload) => jwt.sign(payload, SECRET);
const verifyToken = (token) => jwt.verify(token, SECRET);

module.exports = {
	hashPassword,
	comparePassword,
	createToken,
	verifyToken,
};
