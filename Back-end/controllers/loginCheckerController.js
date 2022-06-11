const DB = require('../model/accountQuerys')

module.exports = {

    validifyLogin: (req, res) => {

        DB.findAccount(req.body).then((response) => {
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
        });

    }
}
