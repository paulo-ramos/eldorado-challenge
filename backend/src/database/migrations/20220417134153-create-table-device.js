'use strict';

module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('devices', { 
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				unique: true,
				allowNull: false,
			},
			key: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				allowNull: false,
			},
			name: {
				type: Sequelize.STRING(128),
				allowNull: false,
			},
			color: {
				type: Sequelize.STRING(16),
				isAlpha: true,
				allowNull: false
			},
			partNumber: {
				type: Sequelize.INTEGER,
				isInt: true,
				min: 0,
				allowNull: false
			},
			categoryId:{
				type: Sequelize.INTEGER,
				allowNull: false,
				references:{
					model: 'categories',
					key: 'id',					
				}
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW,
			},
			deletedAt: {
				type: Sequelize.DATE,
			}
		})
	},
	
	async down (queryInterface, Sequelize) {
		await queryInterface.dropTable('devices')
	}
};


