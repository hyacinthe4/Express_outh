const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = { User };
