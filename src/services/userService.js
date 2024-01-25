var Sequelize = require('sequelize');
const userModel = require('../models/userModel.js')
const surveyModel = require('../models/surveyModel.js')
const questionModel = require('../models/questionModel.js')
const answerModel = require('../models/answerModel.js')
const surveyService = require('../services/surveyService.js');
const survey = require('../models/surveyModel.js');

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

module.exports.surveyPosted = (req,res)=> {
    return new Promise(async function myFn(resolve, reject) {
        const id = req
                
        const questionsreq = req.data.result
        let responses = 0
        const surveygot = await surveyService.getbyId(id) 
        const questions= surveygot.msg.questions
        const answers= surveygot.msg.questions
        const cantidad_preguntas_validar = questions.length
        //const cantidad_preguntas = questionreq.length
        
        try {
            

            await Promise.all(questionsreq.map(async (una) => {
                try {
                  const answer = await answerModel.findOne({ where: { questionId: una.questionId, id: una.answerId } });
                  
                  if (answer.correct == 1) {
                    responses++;
                   
                    
                  }
                } catch (error) {
                  console.error('Error al buscar respuesta:', error.message);
                  throw { status: false, msg: "Error al buscar respuesta" };
                }
              }));
            
              console.log(responses,cantidad_preguntas_validar)
    
        } catch (error) {
            
            
        }
       
        if(responses == cantidad_preguntas_validar){
            resolve({status: true, msg: "Ganaste algo" })
        }    
        reject({ status:false,msg: "No ganaste nada"})
        



    })
}


