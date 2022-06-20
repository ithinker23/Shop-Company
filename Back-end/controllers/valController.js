const DB = require('../model/accountQuerys')
const crypto = require("../controllers/crypto")


module.exports = {

    validifyLogin: async (req, res) => {
        var acc = await DB.findAccount("Username", req.body.Username, "Password")
        if (acc) {
            if (acc.Password == req.body.Password) {
                try {
                    var encryptedData = await crypto.encrypt(req.body.Username)
                    res.status(200).cookie('Username', (encryptedData)).json({ title: 'Login Complete', msg: 'Logging in', color: "#3EB489" })
                } catch (err) {
                    console.log(err)
                }

            } else {
                res.status(400).json({ title: 'Login Failed', msg: 'Invalid password', color: "#ff4c4c" })
            }
        } else {
            //send a notification
            res.status(400).json({ title: 'Login Failed', msg: 'Account does not exist', color: "#ff4c4c" })
        }
    },

    validifyRegister: async (req, res) => {
        var accEmail = await DB.findAccount("Email", req.body.Email, "Email")
        var accUsername = await DB.findAccount("Username", req.body.Username, "Username")
        if (accEmail == null && accUsername == null) {
            DB.createAccountDB(req.body)
            res.status(200).json({ title: 'Registration Complete', msg: 'Account has been registered', color: "#3EB489" });

        } else if (accEmail && accUsername) {
            res.status(400).json({ title: 'Registration Failed', msg: "Email and Username are in use", color: "#ff4c4c" });

        } else if (accEmail) {
            res.status(400).json({ title: 'Registration Failed', msg: 'Email is in use', color: "#ff4c4c" });

        } else {
            res.status(400).json({ title: 'Registration Failed', msg: 'Username is in use', color: "#ff4c4c" });
        }
    }

}

