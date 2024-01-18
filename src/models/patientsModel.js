const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const patients = sequelize.define("patients", {
    id_Patient: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    sex: {
        type: DataTypes.STRING,
        allowNull: true
    },
    height: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    blood: {
        type: DataTypes.STRING,
        allowNull: true
    },
    code: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    timestamps: false
});

module.exports=patients