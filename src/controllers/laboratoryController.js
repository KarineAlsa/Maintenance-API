const laboratoryService = require('../services/laboratoryService.js');

const getWaitingPatientsControllerFunc = async (req, res) => {
    let result = null;
    try {
        result = await laboratoryService.getWaitingPatientsDBService(req);
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};
const getAllPatientsControllerFunc = async (req, res) => {
    let result = null;
    try {
        result = await laboratoryService.getAllPatientsDBService(req);
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};

const getPatientDataControllerFunc = async (req, res) => {
    let result = null;
    const code = req.query.code;
    try {
        result = await laboratoryService.getPatientDBService(code);
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};

const addWaitingPatientControllerFunc = async (req, res) => {
    let result = null;
    const data = req.body

    
    try {
        result = await laboratoryService.addWaitingPatientDBService(data);

        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};

const sendStudiesControllerFunc = async (req, res) => {
    let result = null;
    const code = req.query.code;
    console.log(code);
    
    try {
        result = await laboratoryService.sendStudiesDBService(code);

        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};




module.exports = { getWaitingPatientsControllerFunc, getPatientDataControllerFunc, addWaitingPatientControllerFunc, sendStudiesControllerFunc,getAllPatientsControllerFunc };