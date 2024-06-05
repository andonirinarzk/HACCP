const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  UserID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  FullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  EstablishmentID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = User;
