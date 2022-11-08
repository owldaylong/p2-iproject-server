"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Transaction extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Transaction.belongsTo(models.User);
			Transaction.belongsTo(models.Beverage);
		}
	}
	Transaction.init(
		{
			BeverageId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: { msg: "BeverageId is required!" },
					notEmpty: { msg: "BeverageId is required!" },
				},
			},
			UserId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: { msg: "UserId is required!" },
					notEmpty: { msg: "UserId is required!" },
				},
			},
			quantity: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: { msg: "Quantity is required!" },
					notEmpty: { msg: "Quantity is required!" },
					min: { args: 1, msg: "Minimum quantity is 1!" },
				},
			},
			status: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: "Status is required!" },
					notEmpty: { msg: "Status is required!" },
				},
			},
		},
		{
			sequelize,
			modelName: "Transaction",
		}
	);
	return Transaction;
};
