const surveyService = require('../services/surveyService.js');

const createSurvey = async (req, res) => {
    let result = null;

    try {
        result = await surveyService.createSurvey(req.body)
       
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
        result = await surveyService.getAll()
    
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
}; 

const getbyId = async (req, res) => {
    let result = null;
    const id = req.params
    try {
        result = await surveyService.getbyId(id)
       
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};




module.exports = { getbyId,createSurvey,getAll};