const userService = require('../services/userService.js');
const surveyService = require('../services/surveyService.js');


const userRegister = async (req, res) => {
    let result = null;
    const key =req

    try {
        result = await userService.createUser(req.body)
        
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};

const userid = async (req, res) => {
    let result = null;
    const code = req.params;
    res.send({code})

    try {
        
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};

const surveyPosted = async (req, res) => {
    let result = null;
    const data = {id: req.params.id,data: req.body}
    
    try {
        result = await userService.surveyPosted(data)
        
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {

            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};





module.exports = { userRegister, userid, surveyPosted};