
const bcrypt = require('bcrypt')

module.exports = {

    cookieAuth: async (req, res) => {


        if (req.cookies.LoggedInAs != null) {
            try {
                var result = await bcrypt.compare(req.body.Username, req.cookies.LoggedInAs)
                res.send({ isCorrectHash: result })
            } catch (err) {
                throw err;
            }
        } else {
            res.send({error:"Not Logged In"})
        }

    }


}