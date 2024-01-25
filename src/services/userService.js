var Sequelize = require('sequelize');
const userModel = require('../models/userModel.js')

require('dotenv').config()

module.exports.createUser = (req,res)=> {
    return new Promise(async function myFn(resolve, reject) {
                
        if (req.correo == ""){
            reject({ status:false,msg: "llene el campo"});
        }
        userModel.create({
           mail: req.correo
        })
            .then(user =>{
                if (user) {
                    resolve({status: true, msg: "usuario creado con el correo "+ user.mail
                            
                    })
                }
                else{
                    reject({ status:false,msg: "no se pudo crear el usuario"})
                }
            }).catch(err=>{
            console.log(err)
            reject({status:false, msg: "ups"})
        })
    })
}


