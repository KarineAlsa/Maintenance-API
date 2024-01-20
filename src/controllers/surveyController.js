const surveyService = require('../services/surveyService.js');

const createSurvey = async (req, res) => {
    let result = null;
    try {
       
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};

const getAll = async (req, res) => {
    let result = null;
    try {
    
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};

const userid = async (req, res) => {
    let result = null;
    try {
       
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};




module.exports = { createSurvey,getAll, userid};