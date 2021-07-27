const { DataTypes } = require("sequelize");
const sequelize = require("../../utils/db");

const ContactsTable = sequelize.define("contactstable", {
    label: {
        type: DataTypes.STRING
    },
    name :{
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
    value: {
        type: DataTypes.STRING,
        allowNull: true
    }, section : {
        type: DataTypes.STRING,
        allowNull: true
    }, order: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

});



module.exports = ContactsTable;