const {DataTypes} = require('sequelize');
const sequelize = require("../utils/db");

const Leads = sequelize.define("lead", {
    first_name: {
        type:DataTypes.STRING,
        allowNull: true
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    company: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    s_email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    website:{
        type: DataTypes.STRING,
        allowNull: false
    },
    language:{
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mobile:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lead_scource:{
        type: DataTypes.STRING,
        allowNull: false
    },
    fax:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lead_industry: {
        type: DataTypes.STRING,
        allowNull: false
    },
    skype_id:{
        type: DataTypes.STRING,
        allowNull: false
    },
    state:{
        type: DataTypes.STRING,
        allowNull: false
    },
    street:{
        type: DataTypes.STRING,
        allowNull: false
    },
    po:{
        type: DataTypes.STRING,
        allowNull: false
    },
    zip_code:{
        type: DataTypes.STRING,
        allowNull: false
    },
    city:{
        type: DataTypes.STRING,
        allowNull: false
    },
    country:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Leads;