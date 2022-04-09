'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('categories', { 
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
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.DATE,
    },
    deletedAt: {
      type: Sequelize.DATE,
    },
    })
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categories')
  }
};
