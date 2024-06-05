const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  ProductID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Supplier: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Barcode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Product;
