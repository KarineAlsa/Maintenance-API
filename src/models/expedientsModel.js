const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const expedients = sequelize.define("expedients", {
    id_Patient: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    diagnostic: {
        type: DataTypes.STRING,
        allowNull: true
    },
    treatment: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    timestamps: false
});

module.exports=expedients