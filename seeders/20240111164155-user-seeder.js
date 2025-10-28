'use strict';
const bcrypt = require('bcrypt');
const user = require('../models/user');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const users = [
			{
				email: 'user1@example.com',
				name:'User 1',
				password: bcrypt.hashSync('password1', 10),
				isAdmin: 0,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				email: 'user2@example.com',
				name: 'User 2',
				password: bcrypt.hashSync('password2', 10),
				isAdmin: 0,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				email: 'adminuser@examplecom',
				name: 'Admin User',
				password: bcrypt.hashSync('admin123', 10),
				isAdmin: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		];

		await queryInterface.bulkInsert('users', users);
	},

	async down(queryInterface, Sequelize) {
		// delete all data
		await queryInterface.bulkDelete('users', null, {});
	},
};
