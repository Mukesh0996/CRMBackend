const {DataTypes} = require("sequelize");
const sequelize = require("../utils/db");

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
    }

});




module.exports = LeadsTable;