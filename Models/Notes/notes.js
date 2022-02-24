const { DataTypes } = require("sequelize");
const sequelize = require("../../utils/db");

const Notes = sequelize.define("notes", {
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 10000
        }
    },orgId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})


module.exports = Notes;