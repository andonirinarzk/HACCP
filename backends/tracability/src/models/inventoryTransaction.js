const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Lot = require('./lot');
const Establishment = require('./establishment');
const Meal = require('./meal');

const InventoryTransaction = sequelize.define('InventoryTransaction', {
  TransactionID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  LotID: {
    type: DataTypes.INTEGER,
    references: {
      model: Lot,
      key: 'LotID',
      allowNull: true,
    },
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
  Quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  TransactionDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  AssociatedMealID: {
    type: DataTypes.INTEGER,
    references: {
      model: Meal,
      key: 'MealID',
      allowNull: true,
    },
  },
});

module.exports = InventoryTransaction;
