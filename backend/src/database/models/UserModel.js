const { Sequelize } = require('sequelize')
const database = require('../index')

const UserModel = database.define('user', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false
	},
	key: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV4,
		allowNull: false
	},	
	name: {
		type: Sequelize.STRING(128),
		allowNull: false
	},
	email: {
		type: Sequelize.STRING(128),		
		allowNull: false,
		unique: true,
		validate: {
			isEmail: {
				msg: "Must be a valid email address",
			}
		}
	},
	password: {
		type: Sequelize.STRING(256),
		allowNull: false
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
}, { 
	createdAt: 'createdAt',
	updatedAt: 'updatedAt',
	deletedAt: 'deletedAt',
	paranoid: true,
	timestamps: true,
	tableName: 'users' 
})


module.exports = UserModel