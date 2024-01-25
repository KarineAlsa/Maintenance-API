const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const user = sequelize.define("user", {
    mail: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    timestamps: false
});

module.exports=user