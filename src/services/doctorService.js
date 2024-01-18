var Sequelize = require('sequelize');
const patientsModel= require("../models/patientsModel.js")
const expedientsModel= require("../models/expedientsModel.js")
const doctorModel= require("../models/doctorsModel.js")
const loginDoctor = require('../models/loginDoctorModel.js');
const loginPatient = require('../models/loginPatientModel.js');


require('dotenv').config()

module.exports.getPersonalDataDBService = (req,res)=> {
    return new Promise(async function myFn(resolve, reject) {
        
        const key_init = req
        if (key_init == ""){
            reject({ status:false,msg: "llene el campo"});
        }
        doctorModel.findOne({
            where: {id_Doctor: key_init}
        })
            .then(user =>{

                if (user) {

                    loginDoctor.findOne({
                        where: {key_init: key_init}
                    }).then(medic => {

                        if (medic){
                            
                            resolve({status: true, msg: {
                                user:user.id_Doctor,
                                name:medic.name,
                                firstLastName:medic.firstLastName,
                                secondLastName:medic.secondLastName,
                                license:user.license,
                                specialty:user.specialty
                                }
                            })

                        }
                    })


                    
                }
                else{
                    reject({ status:false,msg: "no hay usuarios con este username"});
                }


            }).catch(err=>{
            console.log(err)
            reject({status:false, msg: "no tienes permisos"})
        })



    })
}

module.exports.getPatientDBService = (req,code,res)=> {
    return new Promise(async function myFn(resolve, reject) {
        const code = req;
        if (code == ""){
            reject({ status:false,msg: "llene el campo"});
        }
        patientsModel.findOne({
            where: {code: code}
        })
            .then(user =>{
                if (user) {
                    loginPatient.findByPk(user.id_Patient).then(loginPatient=>{
                        
                        resolve({status: true, msg: {
                            id_Patient: loginPatient.key_init,
                            name: loginPatient.name,
                            firstLastName: loginPatient.firstLastName,
                            secondLastName: loginPatient.secondLastName,
                            age: user.age,
                            blood:user.age,
                            weight:user.weight,
                            height:user.height,
                            sex:user.sex,

                        }})
                    }).catch(err=>{
                        console.log(err)
                        reject({status:false, msg: "ha sucedido un error"})

                    })
                    
                }else{
                    reject({ status:false,msg: "no hay usuarios con este codigo"});
                }
            }).catch(err=>{
            console.log(err)
            reject({status:false, msg: "ha sucedido un error"})
        })
    })
}

module.exports.updateInfoPatientDBService = (req,res)=> {
    return new Promise(async function myFn(resolve, reject) {
        const key_init = req;
        const code = req.code
        const age = req.age
        const height = req.height
        const weight = req.weight
        
        if (code == "" || age =="" || height =="" || weight ==""){
            reject({ status:false,msg: "llene alguno de los campos"});
        }
        patientsModel.update({age: age,height:height,weight:weight},{
            where: {code: code}
        })
        .then(user =>{
            if (user>0) {
                
                resolve({status: true, msg: "usuario actualizado"})
                
            }
            reject({ status:false,msg: "no hay usuarios con este username"});
            
            
        }).catch(err=>{
            console.log(err)
            reject({status:false, msg: "ha sucedido un error"})
        })
        
        
        
    })
}

module.exports.addPrescriptionDBService = (req,res)=> {
    return new Promise(async function myFn(resolve, reject) {
        
        const id_Patient = req.id_Patient
        const diagnostic = req.diagnostic
        const treatment = req.treatment

        if (id_Patient == "" || diagnostic=="" || treatment==""){
            reject({ status:false,msg: "llene el campo"});
        }
        expedientsModel.create({id_Patient: id_Patient,diagnostic:diagnostic,treatment:treatment})
            .then(user =>{
                if (user) {
                    resolve({status: true, msg: "tratamiento enviado"})
                }
                reject({ status:false,msg: "no se pudo crear "});
            }).catch(err=>{
            console.log(err)
            reject({status:false, msg: "ha sucedido un error"})
        })
    })
}


