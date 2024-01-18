const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const loginDoctor = sequelize.define("loginDoctor", {
    key_init: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false
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

module.exports=loginDoctor