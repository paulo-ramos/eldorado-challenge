'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('users', [
        { key:uuidv4(), name: 'admin', email:"admin@localhost.com.br",password:"xpto", createdAt: new Date(), updatedAt:new Date}
        
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
}; 
