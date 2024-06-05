const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const AuditLog = sequelize.define('AuditLog', {
  LogID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  UserID: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'UserID',
    },
  },
  ActionType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  AffectedTable: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  RecordID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = AuditLog;
