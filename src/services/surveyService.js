const surveyModel= require("../models/surveyModel.js")
const answerModel= require("../models/answerModel.js")
const questionModel= require("../models/questionModel.js")

require('dotenv').config()

module.exports.createSurvey = (req,res)=> {
    return new Promise(async function myFn(resolve, reject) {
        
        
        if (req.title == "" || req.title==null) {
            reject({ status:false,msg: "Ponga un título a la encuesta"});
        }
        surveyModel.create({

           title: req.title

        }).then(survey =>{

            if (survey) {

                req.questions.forEach(element => {
                    
                    questionModel.create({

                        text: element.title, surveyId: survey.id
                    
                    }).then(question =>{

                        if(question){
                            element.answers.forEach(element => {
                                
                                answerModel.create({
                                    text: element.text,
                                    correct: element.correct,
                                    questionId: question.id
                                }).catch(err =>{
                                    console.log(err)
                                    reject({status:false, msg: "ups respuesta"})
                                })
                            });
                        }
                        
                        else{
                            reject({ status:false,msg: "no se pudo crear pregunta"})
                        }
                        
                    }).catch(err =>{
                        console.log(err)
                        reject({status:false, msg: "ups"})
                    })

                });
                

                resolve({status: true, msg: "encuesta " + survey.title + " creada"
                        
                })

            }
            else{
                reject({ status:false,msg: "no se pudo crear"})
            }


        }).catch(err=>{
            console.log(err)
            reject({status:false, msg: "ups"})
        })



    })
}





