const DB = require('../model/cookieQuerys')

module.exports = {
    cookieAuth: async (req, res) => {
        res.status(200).json({title: "Authentication Successful", msg: "You are already logged in"})
    }
}