const Sequelize = require('sequelize');

const sequelize = new Sequelize('CRM', 'root', 'Mukesh@123', {dialect: "mysql", host:"localhost" })


module.exports = sequelize;