"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Transactions", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			BeverageId: {
				type: Sequelize.INTEGER,
				references: {
					model: "Beverages",
					key: "id",
				},
				onUpdate: "cascade",
				onDelete: "cascade",
			},
			UserId: {
				type: Sequelize.INTEGER,
				references: {
					model: "Users",
					key: "id",
				},
				onUpdate: "cascade",
				onDelete: "cascade",
			},
			quantity: {
				type: Sequelize.INTEGER,
			},
			status: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Transactions");
	},
};
