const userService = require('../services/loginService.js');

const loginPatientControllerFunc = async (req, res) => {
    let result = null;
    try {
        result = await userService.loginPatientDBService(req.body);
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};

const loginDoctorControllerFunc = async (req, res) => {
    let result = null;
    try {
        result = await userService.loginDoctorDBService(req.body);
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};

const loginLaboratoryControllerFunc = async (req, res) => {
    let result = null;
    try {
        result = await userService.loginLaboratoryDBService(req.body);
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};




module.exports = { loginPatientControllerFunc, loginDoctorControllerFunc, loginLaboratoryControllerFunc};