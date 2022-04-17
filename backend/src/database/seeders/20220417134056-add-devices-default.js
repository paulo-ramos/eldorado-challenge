'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('devices', [
			{ key:uuidv4(), name: 'Galaxy S30', color:"azul", partNumber:"2147483637", categoryId: 2, createdAt: new Date(), updatedAt:new Date},
			{ key:uuidv4(), name: 'Galaxy S40', color:"branco", partNumber:"2147483638", categoryId: 2, createdAt: new Date(), updatedAt:new Date},
			{ key:uuidv4(), name: 'iPhone 12', color:"preto", partNumber:"2147483639", categoryId: 3, createdAt: new Date(), updatedAt:new Date},
			{ key:uuidv4(), name: 'MacBook Pro', color:"amarelo", partNumber:"2147483641", categoryId: 4, createdAt: new Date(), updatedAt:new Date},
			{ key:uuidv4(), name: 'Teclado Logitech ABNT2', color:"roxo", partNumber:"2147483642", categoryId: 5, createdAt: new Date(), updatedAt:new Date},
			{ key:uuidv4(), name: 'PS 5', color:"prata", partNumber:"2147483643", categoryId: 6, createdAt: new Date(), updatedAt:new Date},
			{ key:uuidv4(), name: 'Trituradora de Papel', color:"cinza", partNumber:"2147483644", categoryId: 7, createdAt: new Date(), updatedAt:new Date},
			{ key:uuidv4(), name: 'Avell A-3256', color:"laranja", partNumber:"2147483645", categoryId: 4, createdAt: new Date(), updatedAt:new Date},
			{ key:uuidv4(), name: 'Sony Vaio', color:"verde", partNumber:"2147483646", categoryId: 4, createdAt: new Date(), updatedAt:new Date},
			{ key:uuidv4(), name: 'Galaxy S50', color:"avermelho", partNumber:"2147483647", categoryId: 2, createdAt: new Date(), updatedAt:new Date},
			
		], {});
	},
	
	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('devices', null, {});
	}
};
