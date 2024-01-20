const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const answers= require("../models/answerModel.js")

const question = sequelize.define("question", {
    text: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    timestamps: false
});

question.hasMany(answers, {
    foreignKey: 'questionId'
})
answers.belongsTo(question)


module.exports=question