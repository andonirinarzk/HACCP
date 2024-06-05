const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Meal = require('./meal');

const MealSample = sequelize.define('MealSample', {
  SampleID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  MealID: {
    type: DataTypes.INTEGER,
    references: {
      model: Meal,
      key: 'MealID',
    },
  },
  StoredDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  StoredUntil: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  StorageCondition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  SampleQuantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = MealSample;
