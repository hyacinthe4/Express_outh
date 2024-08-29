// models/users.js

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
}, {
    tableName: 'users'  // Specify the table name explicitly
});

module.exports = { User };
