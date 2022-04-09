const { Sequelize } = require('sequelize')
const database = require('../index')

const CategoryModel = database.define('category', {
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
    }
}, { 
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    paranoid: true,
    timestamps: true,
    tableName: 'category' 
})


module.exports = CategoryModel