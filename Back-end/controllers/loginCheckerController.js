const DB = require('../model/accountQuerys')

module.exports = {

    validifyLogin: (req, res) => {
       // var accountValidity = accounts.find((account) => (account.username === req.body.username && account.password === req.body.password))

       var accountValidity = DB.findAccount();

        if (accountValidity) {
            console.log('logged')
        } else {
            console.log('invalid')
        }
    }
}
