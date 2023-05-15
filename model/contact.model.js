const sequalise = require("../config/db");
const { DataTypes} = require('sequelize');

const Contact = sequalise.define('contact', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, user_email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Contact;