const {DataTypes} = require('sequelize');
const sequelize = require('../utils/db');

const user = sequelize.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING
    }, password: {
        type: DataTypes.STRING
    },
    first_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    contact: {
        type: DataTypes.STRING
    }
})

module.exports = user;