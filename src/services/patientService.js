const patientsModel= require("../models/patientsModel.js")
const expedientsModel= require("../models/expedientsModel.js")
const laboratoryModel= require("../models/laboratoryModel.js")
const loginPatient = require('../models/loginPatientModel.js');
require('dotenv').config()

module.exports.getPersonalDataDBService = (req,res)=> {
    return new Promise(async function myFn(resolve, reject) {
        
        const key_init = req
        if (key_init == ""){
            reject({ status:false,msg: "llene el campo"});
        }
        patientsModel.findOne({
            where: {id_Patient: key_init},
        })
            .then(patient =>{

                if (patient) {
                    
                    loginPatient.findByPk(key_init)
                        .then(loginPatient=>{
                            if (loginPatient){

                                resolve({status: true, msg: {
                                    id_Patient:patient.id_Patient,
                                    name: loginPatient.name,
                                    firstLastName: loginPatient.firstLastName,
                                    secondLastName: loginPatient.secondLastName,
                                    sex: loginPatient.sex,
                                    weight: loginPatient.weight,
                                    height: loginPatient.height,
                                    typeStudy: loginPatient.typeStudy
                                }})
                            }
                        })

                    
                }
                else{
                    reject({ status:false,msg: "no hay usuarios con este username"})
                }


            }).catch(err=>{
            console.log(err)
            reject({status:false, msg: "no tienes permisos"})
        })



    })
}

module.exports.getExpedientsDBService = (req,res)=> {
    return new Promise(async function myFn(resolve, reject) {
        const key_init = req;
        
        if (key_init == ""){
            reject({ status:false,msg: "llene el campo"});
        }
        expedientsModel.findAll({
            where: {id_Patient: key_init}
        })
            .then(user =>{
                if (user) {

                    resolve({status: true, msg: user})

                    
                }
                reject({ status:false,msg: "no hay usuarios con este username"});


            }).catch(err=>{
            console.log(err)
            reject({status:false, msg: "ha sucedido un error"})
        })



    })
}

module.exports.getStudiesDBService = (req,res)=> {
    return new Promise(async function myFn(resolve, reject) {
        const key_init = req;

        if (key_init == ""){
            reject({ status:false,msg: "llene el campo"});
        }
        laboratoryModel.findAll({
            where: {id_Patient: key_init}
        })
            .then(user =>{
                if (user) {

                    resolve({status: true, msg: user})

                }
                reject({ status:false,msg: "no hay usuarios con este username"});


            }).catch(err=>{
            console.log(err)
            reject({status:false, msg: "ha sucedido un error"})
        })



    })
}



