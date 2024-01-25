const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const answers = sequelize.define("answer", {
    text: {
        type: DataTypes.STRING,
        allowNull: true
    },
    correct: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
},{
    timestamps: false
});

module.exports=answers