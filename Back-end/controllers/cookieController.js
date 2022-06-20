const crypto = require('../controllers/crypto')
const DB = require('../model/accountQuerys')

module.exports = {

    checkUserCookie: async (req, res) => {
        if (req.cookies.Username) {
            try {
                var decryptedData = await crypto.decrypt(req.cookies.Username)
                const userInfo = await DB.findAccount("Username", decryptedData, "Name")
                res.status(200).json(userInfo)
            } catch (err) {
                res.status(400)
                throw err
            }
        } else {
            res.status(200).json({Name: ""})
        }
    }
}
