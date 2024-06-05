const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./product');

const Lot = sequelize.define('Lot', {
  LotID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ProductID: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'ProductID',
    },
  },
  ReceivedDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  ExpirationDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  QuantityInitial: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  CurrentQuantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Lot;
