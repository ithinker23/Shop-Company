const DB = require('../model/accountQuerys')

module.exports = {

    validifyLogin: async (req, res) => {

        var acc = await DB.findAccount("Username", req.body.Username)
        if (acc) {
            if (acc.Password == req.body.Password) {
            res.status(200).json({msg: 'logging in'})

            } else {
                res.status(400).json({msg: 'invalid password'})

            }
        } else {
            //send a notification
            res.status(400).json({msg: 'account does not exist'})

        }
    },

    validifyRegister: async (req, res) => {
        var accEmail = await DB.findAccount("Email", req.body.Email)
        var accUsername = await DB.findAccount("Username", req.body.Username)
        if (accEmail == null && accUsername == null) {
            DB.createAccountDB(req.body)
            res.status(200).json({msg: 'Account has been registered'});

        } else if (accEmail && accUsername) {
            res.status(400).json({msg: "email and username are in use"});

        } else if (accEmail) {
            res.status(400).json({msg: 'Email is in use'});

        } else {
            res.status(400).json({msg: 'Username is in use'});  

        }
    }
}

