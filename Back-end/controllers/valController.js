const DB = require('../model/accountQuerys')

module.exports = {

    validifyLogin: async (req, res) => {

        var acc = await DB.findAccount("Username", req.body.Username)
        if (acc) {
            if (acc.Password == req.body.Password) {
                res.sendStatus(200)
                console.log('logged in')
            } else {
                res.sendStatus(400)
                //send a notification
                console.log('invalid password')
            }
        } else {
            //send a notification
            res.sendStatus(400)
            console.log('account does not exist')
        }
    },

    validifyRegister: async (req, res) => {
        var accEmail = await DB.findAccount("Email", req.body.Email)
        var accUsername = await DB.findAccount("Username", req.body.Username)
        if (accEmail == null && accUsername == null) {
            DB.createAccountDB(req.body)
            console.log("registered")
        } else if (accEmail && accUsername) {
            console.log("email and username are in use")
        } else if (accEmail) {
            console.log('Email is in use')
        } else {
            console.log('Username is in use')
        }
    }
}

