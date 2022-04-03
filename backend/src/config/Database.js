const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('eldorado', 'root', '1q2w3e4r@#$', {
    dialect: 'mysql',
    host:"localhost",
    port:"3306",
    timezone: 'Z',
    charset: 'UTF8_GENERAL_CI'
})

module.exports = sequelize