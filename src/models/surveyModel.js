const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const questions= require("../models/questionModel.js")

const survey = sequelize.define("survey", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
});

survey.hasMany(questions, {
    foreignKey: 'surveyId'
})
questions.belongsTo(survey)


module.exports=survey;