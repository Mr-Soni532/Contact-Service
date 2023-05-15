const sequalise = require("../config/db");
const { DataTypes} = require('sequelize');

const User = sequalise.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User;