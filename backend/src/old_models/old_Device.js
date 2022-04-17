const { Sequelize } = require('sequelize')
const database = require('../config/Database')

const Device = database.define('devices', {
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
}, 
{ 
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    paranoid: true,
    timestamps: true,
    tableName: 'category'
})

module.exports = Device