const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const MealSample = require('./mealSample');

const Meal = sequelize.define('Meal', {
  MealID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PreparationDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  ChefID: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'UserID',
      allowNull: true,
    },
  },
  SampleID: {
    type: DataTypes.INTEGER,
    references: {
      model: MealSample,
      key: 'SampleID',
      allowNull: true,
    },
  },
});

module.exports = Meal;
