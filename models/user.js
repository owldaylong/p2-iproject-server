"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/helpers");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User.hasMany(models.Transaction);
		}
	}
	User.init(
		{
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: "Username is required!" },
					notEmpty: { msg: "Username is required!" },
				},
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: { msg: "Email has been registered!" },
				validate: {
					notNull: { msg: "Email is required!" },
					notEmpty: { msg: "Email is required!" },
					isEmail: { msg: "Invalid email format" },
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: "Password is required!" },
					notEmpty: { msg: "Password is required!" },
					isLength(pass) {
						if (pass.length < 5) {
							throw new Error("Password length minimal 5 characters!");
						}
					},
				},
			},
		},
		{
			sequelize,
			modelName: "User",
		}
	);

	User.beforeCreate(async (user) => {
		const hashedPassword = await hashPassword(user.password);
		user.password = hashedPassword;
	});

	return User;
};
