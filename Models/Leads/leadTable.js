const { DataTypes } = require("sequelize");
const sequelize = require("../../utils/db");

const LeadsTable = sequelize.define("leadtable", {
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
        allowNull: false
    }

});



module.exports = LeadsTable;