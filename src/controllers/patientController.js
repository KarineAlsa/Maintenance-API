const patientService = require('../services/patientService.js');

const getPersonalDataControllerFunc = async (req, res) => {
    let result = null;
    const key =req.user.user.key_init
    try {
        result = await patientService.getPersonalDataDBService(key);
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};

const getExpedientsControllerFunc = async (req, res) => {
    let result = null;
    const key =req.user.user.key_init
    console.log(key)
    try {
        result = await patientService.getExpedientsDBService(key);
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};

const getStudiesControllerFunc = async (req, res) => {
    let result = null;
    const key =req.user.user.key_init
    try {
        result = await patientService.getStudiesDBService(key);
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};

const getDataControllerFunc = async (req, res) => {
    let result = null;
    const key =req.user.user.key_init
    try {
        result = await userService.getDataStudiesDBService(key);
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};




module.exports = { getPersonalDataControllerFunc, getExpedientsControllerFunc, getStudiesControllerFunc};