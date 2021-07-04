const  { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Org = sequelize.define('Org',{
    org_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
    }, org_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Org;