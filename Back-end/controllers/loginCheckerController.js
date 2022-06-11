const DB = require('../model/accountQuerys')

module.exports = {

    validifyLogin:(req, res) => {

       var response = DB.findAccount(req.body)
       
            if (response) {
                if (response.Password == req.body.Password) {
                    res.sendStatus(200)
                    console.log('logged in')
                } else {
                    res.sendStatus(418)
                    console.log('invalid password')
                }
            } else {
                console.log('account does not exist')
            }
    }
}
