const doctorService = require('../services/userService.js');

const getPersonalDataControllerFunc = async (req, res) => {
    let result = null;
    const key =req.user.user.key_init
    try {
        result = await doctorService.getPersonalDataDBService(key);
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};

const getPatientControllerFunc = async (req, res) => {
    let result = null;
    const code = req.query.code;
    

    try {
        result = await doctorService.getPatientDBService(code);
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};

const updateInfoPatientControllerFunc = async (req, res) => {
    let result = null;
    const data = req.body
    
    try {
        result = await doctorService.updateInfoPatientDBService(data);

        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};

const addPrescriptionControllerFunc = async (req, res) => {
    let result = null;
    const data = req.body
    
    try {
        result = await doctorService.addPrescriptionDBService(data);

        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};




module.exports = { getPersonalDataControllerFunc, getPatientControllerFunc, updateInfoPatientControllerFunc, addPrescriptionControllerFunc};