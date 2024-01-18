var Sequelize = require('sequelize');
const loginPatientModel= require("../models/loginPatientModel.js")
const loginLaboratoryModel= require("../models/loginLaboratoryModel.js")
const loginDoctorModel= require("../models/loginDoctorModel.js")
const jwt= require("jsonwebtoken")


require('dotenv').config()

module.exports.loginPatientDBService = (req,res)=> {
    return new Promise(async function myFn(resolve, reject) {
        const key_init = req.key_init;

        if (key_init == ""){
            reject({ status:false,msg: "llene el campo"});
        }
        loginPatientModel.findOne({
            where: {key_init: key_init}
        })
            .then(user =>{
                if (user) {

                    let token=jwt.sign({
                        user:user
                    }, process.env.TOKEN_SECRET,{
                        expiresIn: process.env.EXPIRE
                    })

                    resolve({status: true, msg: {msg:"validado", token:token}})

                    
                    reject({ status:false,msg: "contraseña incorrecta"});
                }
                reject({ status:false,msg: "no hay usuarios con este username"});


            }).catch(err=>{
            console.log(err)
            reject({status:false, msg: "ha sucedido un error"})
        })



    })
}

module.exports.loginDoctorDBService = (req,res)=> {
    return new Promise(async function myFn(resolve, reject) {
        const key_init = req.key_init;

        if (key_init == ""){
            reject({ status:false,msg: "llene el campo"});
        }
        loginDoctorModel.findOne({
            where: {key_init: key_init}
        })
            .then(user =>{
                if (user) {

                    let token=jwt.sign({
                        user:user
                    }, process.env.TOKEN_SECRET,{
                        expiresIn: process.env.EXPIRE
                    })

                    resolve({status: true, msg: {msg:"validado", token:token}})

                    
                    reject({ status:false,msg: "contraseña incorrecta"});
                }
                reject({ status:false,msg: "no hay usuarios con este username"});


            }).catch(err=>{
            console.log(err)
            reject({status:false, msg: "ha sucedido un error"})
        })



    })
}

module.exports.loginLaboratoryDBService = (req,res)=> {
    return new Promise(async function myFn(resolve, reject) {
        const key_init = req.key_init;

        if (key_init == ""){
            reject({ status:false,msg: "llene el campo"});
        }
        loginLaboratoryModel.findOne({
            where: {key_init: key_init}
        })
            .then(user =>{
                if (user) {

                    let token=jwt.sign({
                        user:user
                    }, process.env.TOKEN_SECRET,{
                        expiresIn: process.env.EXPIRE
                    })

                    resolve({status: true, msg: {msg:"validado", token:token}})

                    
                    reject({ status:false,msg: "contraseña incorrecta"});
                }
                reject({ status:false,msg: "no hay usuarios con este username"});


            }).catch(err=>{
            console.log(err)
            reject({status:false, msg: "ha sucedido un error"})
        })



    })
}



