const DB = require('../model/accountQuerys')

module.exports = {

    validifyLogin: (req, res) => {

        var accountValidity = DB.findAccount(req.body.username);

        if (accountValidity) {
            if (accountValidity.Password == req.body.password) {
                res.status(200)
                console.log('logged')
            } else {
                console.log('invalid')
            }
        }else{
            console.log('account does not exist')
        }
    }
}
