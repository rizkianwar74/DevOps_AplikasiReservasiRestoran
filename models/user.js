'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class user extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	user.init(
		{
			email: DataTypes.STRING,
			name: DataTypes.STRING,
			password: DataTypes.STRING,
			isAdmin: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'user',
		}
	);

	// untuk enkripsi password
	user.beforeCreate(async item => {
		item.password = await bcrypt.hash(item.password, 10);
	});

	return user;
};
