'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      { key:uuidv4(), name: 'Smartphones', createdAt: new Date(), updatedAt:new Date},
      { key:uuidv4(), name: 'Computadores', createdAt: new Date(), updatedAt:new Date},
      { key:uuidv4(), name: 'Periféricos', createdAt: new Date(), updatedAt:new Date},
      { key:uuidv4(), name: 'Games', createdAt: new Date(), updatedAt:new Date},
      { key:uuidv4(), name: 'Escritório', createdAt: new Date(), updatedAt:new Date},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
