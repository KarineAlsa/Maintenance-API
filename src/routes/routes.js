const express=require("express");
var surveyController = require('../controllers/surveyController.js');
var patientController = require('../controllers/patientController.js');
var doctorController = require('../controllers/userController.js');
var laboratoryController = require('../controllers/laboratoryController.js');

const router =express.Router()
const verify=require('../jwt/Verify.js');


/* CREAR ENCUESTA */
router.route('/survey/create').post(loginController.loginPatientControllerFunc)
/* VER ENCUESTAS */
router.route('/survey').get(verify,patientController.getStudiesControllerFunc)

/* USUARIO CONTESTAR ENCUESTA */
router.route('/user/survey/:id').post(verify,patientController.getPersonalDataControllerFunc)
/* CREAR USUARIO */
router.route('/user/create').get(verify,patientController.getExpedientsControllerFunc)


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