const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Group = require('./group');

const Establishment = sequelize.define('Establishment', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Establishment;
