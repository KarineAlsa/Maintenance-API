const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const doctors = sequelize.define("doctors", {
    id_Doctor: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    license: {
        type: DataTypes.STRING,
        allowNull: true
    },
    specialty: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    timestamps: false
});

module.exports=doctors;