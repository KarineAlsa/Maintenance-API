const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const correctAnswers = sequelize.define("correctAnswer", {
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

module.exports=correctAnswers