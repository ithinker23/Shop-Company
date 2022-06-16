const DB = require('../model/accountQuerys')
const bcrypt = require('bcrypt')

module.exports = {

    validifyLogin: async (req, res) => {

        var acc = await DB.findAccount("Username", req.body.Username)

        if (acc) {
            if (acc.Password == req.body.Password) {

            bcrypt.hash(acc.Username, 10).then((hash)=> {
                res.status(200).cookie('LoggedInAs', hash).json({title: 'Login Complete', msg: 'logging in'})
            })
  

            } else {
                res.status(400).json({title: 'Login Failed', msg: 'invalid password'})

            }
        } else {
            //send a notification
            res.status(400).json({title: 'Login Failed', msg: 'account does not exist'})

        }
    },

    validifyRegister: async (req, res) => {
        var accEmail = await DB.findAccount("Email", req.body.Email)
        var accUsername = await DB.findAccount("Username", req.body.Username)
        if (accEmail == null && accUsername == null) {
            DB.createAccountDB(req.body)
            res.status(200).json({title: 'Registration Complete', msg: 'Account has been registered'});

        } else if (accEmail && accUsername) {
            res.status(400).json({title: 'Registration Failed', msg: "email and username are in use"});

        } else if (accEmail) {
            res.status(400).json({title: 'Registration Failed', msg: 'Email is in use'});

        } else {
            res.status(400).json({title: 'Registration Failed', msg: 'Username is in use'});
        }
    }
}

