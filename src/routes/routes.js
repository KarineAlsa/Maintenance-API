const express=require("express");
var loginController = require('../controllers/loginController.js');
var patientController = require('../controllers/patientController.js');
var doctorController = require('../controllers/doctorController.js');
var laboratoryController = require('../controllers/laboratoryController.js');

const router =express.Router()
const verify=require('../jwt/Verify.js');


/* LOGIN */
router.route('/login/patient').post(loginController.loginPatientControllerFunc)
router.route('/login/doctor').post(loginController.loginDoctorControllerFunc)
router.route('/login/laboratory').post(loginController.loginLaboratoryControllerFunc)

/*PATIENT */
router.route('/patient/personal').get(verify,patientController.getPersonalDataControllerFunc)
router.route('/patient/expedients').get(verify,patientController.getExpedientsControllerFunc)
router.route('/patient/laboratory').get(verify,patientController.getStudiesControllerFunc)

/*DOCTOR*/
router.route('/doctor/personal').get(verify,doctorController.getPersonalDataControllerFunc)
router.route('/doctor/search').get(verify,doctorController.getPatientControllerFunc)
router.route('/doctor/update').put(verify,doctorController.updateInfoPatientControllerFunc)
router.route('/doctor/prescription').post(verify,doctorController.addPrescriptionControllerFunc)

/*LABORATORY*/
router.route('/laboratory/all').get(verify,laboratoryController.getWaitingPatientsControllerFunc) //ya
router.route('/laboratory/search').get(verify,laboratoryController.getPatientDataControllerFunc) //ya
router.route('/laboratory/add').post(verify,laboratoryController.addWaitingPatientControllerFunc)
router.route('/laboratory/send').delete(verify,laboratoryController.sendStudiesControllerFunc)


router.route('/all/patient').get(verify,laboratoryController.getAllPatientsControllerFunc) //ya

module.exports=router;