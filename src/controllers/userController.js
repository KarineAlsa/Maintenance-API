

const userRegister = async (req, res) => {
    let result = null;
    const key =req
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
    const data = req.body
    
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





module.exports = { userRegister, userid, surveyPosted};