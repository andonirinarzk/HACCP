const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Establishment = require('./establishment');

const StorageUnit = sequelize.define('StorageUnit', {
  StorageUnitID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  EstablishmentID: {
    type: DataTypes.INTEGER,
    references: {
      model: Establishment,
      key: 'EstablishmentID',
    },
  },
  Type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = StorageUnit;
