const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Group = require('./group');

const Establishment = sequelize.define('Establishment', {
  EstablishmentID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  GroupID: {
    type: DataTypes.INTEGER,
    references: {
      model: Group,
      key: 'GroupID',
      allowNull: true,
    },
  },
});

module.exports = Establishment;
