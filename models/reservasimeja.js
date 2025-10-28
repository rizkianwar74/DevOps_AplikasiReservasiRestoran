'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservasiMeja extends Model {
    static associate(models) {
      reservasiMeja.belongsTo(models.user, { foreignKey: 'user_id', targetKey:'id', as:'user' });
      reservasiMeja.belongsTo(models.meja, { foreignKey: 'meja_id', targetKey:'id', as:'meja' });
    }
  }
  reservasiMeja.init({
    user_id: DataTypes.INTEGER,
    meja_id: DataTypes.INTEGER,
    tanggal: DataTypes.DATE,
    waktu: DataTypes.TIME,
    durasi: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'reservasiMeja',
  });
  return reservasiMeja;
};