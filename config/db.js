const {Sequelize} = require('sequelize');

    const sequalise = new Sequelize('contact','root','Bhupender@69@',{
        host: 'localhost',
        dialect: 'mysql'
    });

module.exports = sequalise;