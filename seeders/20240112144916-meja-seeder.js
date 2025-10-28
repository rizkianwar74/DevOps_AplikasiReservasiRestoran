'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const mejas = [
			{
        nomor_meja: '01',
        kapasitas: 4,
        status: 0,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        nomor_meja: '02',
        kapasitas: 4,
        status: 0,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        nomor_meja: '03',
        kapasitas: 4,
        status: 0,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        nomor_meja: '04',
        kapasitas: 4,
        status: 0,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        nomor_meja: '05',
        kapasitas: 6,
        status: 0,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        nomor_meja: '06',
        kapasitas: 6,
        status: 0,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        nomor_meja: '07',
        kapasitas: 6,
        status: 0,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        nomor_meja: '08',
        kapasitas: 6,
        status: 0,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		];

		await queryInterface.bulkInsert('mejas', mejas);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mejas', null, {});
  }
};
