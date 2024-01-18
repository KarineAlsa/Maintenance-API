var Sequelize = require('sequelize');
const externalPatientsModel= require("../models/externalPatientsModel.js")
const expedientsModel= require("../models/expedientsModel.js")
const patientsModel= require("../models/patientsModel.js")
const laboratoryModel= require("../models/laboratoryModel.js")
const jwt= require("jsonwebtoken");
const loginPatientModel = require('../models/loginPatientModel.js');


require('dotenv').config()

module.exports.getWaitingPatientsDBService = (req,res)=> {
    return new Promise(async function myFn(resolve, reject) {
        
        externalPatientsModel.findAll()
            .then(external =>{
                if (external) {

                    resolve({status: true, msg: external})

                    
                }
                reject({ status:false,msg: "no hay usuarios con este username"});


            }).catch(err=>{
            console.log(err)
            reject({status:false, msg: "no tienes permisos"})
        })



    })
}
module.exports.getAllPatientsDBService = (req,res)=> {
    return new Promise(async function myFn(resolve, reject) {
        
        patientsModel.findAll()
            .then(allPatients =>{
                if (allPatients) {

                    resolve({status: true, msg: allPatients})

                    
                }
                reject({ status:false,msg: "no hay usuarios"});


            }).catch(err=>{
            console.log(err)
            reject({status:false, msg: "no tienes permisos"})
        })



    })
}

module.exports.getPatientDBService = (req,res)=> {
    return new Promise(async function myFn(resolve, reject) {
        const code = req;
        
        if (code == ""){
            reject({ status:false,msg: "llene el campo"});
        }
        externalPatientsModel.findOne({
            where: {codeExternal: code}
        })
            .then(external =>{
                if (external) {
                    resolve({status: true, msg: {
                        name: external.name,
                        firstLastName: external.firstLastName,
                        secondLastName: external.secondLastName,
                        code: external.codeExternal,
                        typeStudy: external.typeStudy
                    }})                   
                }
                else{
                    patientsModel.findOne({
                        where: {code: code}
                    })
                    .then(patient=>{
                        if(patient){

                            loginPatientModel.findByPk(patient.id_Patient)
                            .then(patientInfo => {
                                if(patientInfo){


                                    resolve({status:true,msg:{
                                        name:patientInfo.name, 
                                        firstLastName:patientInfo.firstLastName,
                                        secondLastName:patientInfo.secondLastName,
                                        code:patient.code,
                                        typeStudy:"sin estudios en espera"
                                    }})
                                }
                            })
                        }else{
                            reject({ status:false,msg: "no hay usuarios con este codigo"});
                            
                        }
                    })
                }
            }).catch(err=>{
            console.log(err)
            reject({status:false, msg: "ha sucedido un error"})
        })



    })
}

module.exports.addWaitingPatientDBService = (req,res)=> {
    return new Promise(async function myFn(resolve, reject) {
        console.log(req)
        const name = req.name;
        const firstLastName = req.firstLastName
        const secondLastName = req.secondLastName
        const typeStudy = req.typeStudy
        const code=req.code


        if (code == "" ||name == ""||firstLastName == ""||typeStudy==""){
            reject({ status:false,msg: "llene los campos obligatorios"});
        }else{
        externalPatientsModel.create({
            name: name,firstLastName: firstLastName,secondLastName: secondLastName,typeStudy:typeStudy,codeExternal:code
        })
            .then(user =>{
                if (user) {

                    resolve({status: true, msg: "agregado a lista de espera"})
                }

            }).catch(err=>{
            console.log(err)
            reject({status:false, msg: "ha sucedido un error"})
        })}



    })
}

module.exports.sendStudiesDBService = (req,res)=> {
    return new Promise(async function myFn(resolve, reject) {
        const code = req;
    


        if (code == ""){
            reject({ status:false,msg: "ningún campo puede estar vacío"});
        }else{
        externalPatientsModel.destroy({
            where:{codeExternal:code}
        })
            .then(user =>{
                if (user) {

                    resolve({status: true, msg: "resultado enviado"})
                }
                reject({status:false, msg:"no existe el usuario"})

            }).catch(err=>{
            console.log(err)
            reject({status:false, msg: "ha sucedido un error"})
        })}



    })
}





