"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Beverage extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Beverage.hasMany(models.Transaction);
		}
	}
	Beverage.init(
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
			price: DataTypes.INTEGER,
			imgUrl: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Beverage",
		}
	);
	return Beverage;
};
