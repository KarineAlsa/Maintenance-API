const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const loginLaboratory = sequelize.define("loginLaboratory", {
    key_init: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    timestamps: false
});

module.exports=loginLaboratory