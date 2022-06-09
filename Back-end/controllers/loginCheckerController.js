const accounts = require('../model/querys').accounts

module.exports = {

    validifyLogin: (req, res) => {
        var accountValidity = accounts.find((account) => (account.username === req.body.username && account.password === req.body.password))
        console.log(accountValidity)
        if (accountValidity) {
            console.log('logged')
        } else {
            console.log('invalid')
        }
    }
}
