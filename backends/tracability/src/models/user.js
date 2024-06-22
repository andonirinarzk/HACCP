const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  },
  establishmentId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Establishments',
      key: 'id'
    }
  }
});

module.exports = User;
