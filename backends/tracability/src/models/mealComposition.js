const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Meal = require('./meal');
const Product = require('./product');

const MealComposition = sequelize.define('MealComposition', {
  MealID: {
    type: DataTypes.INTEGER,
    references: {
      model: Meal,
      key: 'MealID',
    },
  },
  ProductID: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'ProductID',
    },
  },
  QuantityUsed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = MealComposition;
