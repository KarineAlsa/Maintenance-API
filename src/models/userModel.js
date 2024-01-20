const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const user = sequelize.define("user", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    firstLastName: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    secondLastName: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    codeExternal: {
        type: DataTypes.STRING,
        allowNull: true
    },
    typeStudy: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},{
    timestamps: false
});

module.exports=user