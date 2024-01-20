const surveyModel= require("../models/surveyModel.js")
const answerModel= require("../models/answerModel.js")
const expedientsModel= require("../models/questionModel.js")

require('dotenv').config()

module.exports.createSurvey = (req,res)=> {
    return new Promise(async function myFn(resolve, reject) {
        
        const key_init = req
        console.log(req)
        if (key_init == ""){
            reject({ status:false,msg: "llene el campo"});
        }
        surveyModel.create({
           title: req.title
        })
            .then(encuesta =>{

                if (patient) {
                    resolve({status: true, msg: encuesta
                            
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





