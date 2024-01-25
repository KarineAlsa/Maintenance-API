const express = require("express");
const surveyController = require('../controllers/surveyController.js');
const userController = require('../controllers/userController.js');
const router = express.Router();


/* CREAR ENCUESTA */
router.route('/survey/create').post(surveyController.createSurvey)
/* VER ENCUESTAS */
router.route('/survey').get(surveyController.getAll)
/* OBTENER UNA ENCUESTA POR SU ID */
router.route('/survey/:id').get(surveyController.getbyId)

/* USUARIO CONTESTAR ENCUESTA */
router.route('/user/survey/:id').post(userController.surveyPosted)
/* CREAR USUARIO */
router.route('/user/create').post(userController.userRegister)
//router.route('/user/:id').get(userController.userid)
console.log("despues de cors")


module.exports = router