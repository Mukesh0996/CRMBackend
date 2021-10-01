const { DataTypes, Sequelize } = require("sequelize");
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
    },
    inBusinessCardView : {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    businessCardOrder : {
        type: DataTypes.INTEGER
    }


});



module.exports = LeadsTable;