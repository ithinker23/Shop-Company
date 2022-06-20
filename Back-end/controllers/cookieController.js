const DB = require('../model/accountQuerys')

module.exports = {

    checkUserCookie: async (req, res) => {
        if (req.cookies.Username) {
            try {
                const userInfo = await DB.findAccount("Username", req.cookies.Username, "Name")
                res.status(200).json(userInfo)
            } catch (err) {
                res.status(400)
            }
        } else {
            res.status(200).json({Name: ""})
        }
    }
}
