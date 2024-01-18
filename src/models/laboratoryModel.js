const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const laboratory = sequelize.define("laboratory", {
    id_Patient: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
},{
    timestamps: false
});

module.exports=laboratory