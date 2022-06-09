
const checkLogin = require('../service/checkLoginService.js');

var controllers = {

    checkLogin: (req, res) => {
        checkLogin.handler()

    }

}



module.exports = controllers;