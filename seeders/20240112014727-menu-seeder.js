'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const menus = [
			{
        nama_menu: "Nasi Goreng",
        jenis_menu: "Makanan",
        harga: 15000,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        nama_menu: "Mie Goreng",
        jenis_menu: "Makanan",
        harga: 13000,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        nama_menu: "Es Teh",
        jenis_menu: "Minuman",
        harga: 5000,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        nama_menu: "Es Campur",
        jenis_menu: "Minuman",
        harga: 8000,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		];

		await queryInterface.bulkInsert('menus', menus);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('menus', null, {});
  }
};
