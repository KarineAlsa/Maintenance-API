const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const loginPatient = sequelize.define("loginPatient", {
    key_init: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    firstLastName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    secondLastName: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    timestamps: false
});

module.exports=loginPatient