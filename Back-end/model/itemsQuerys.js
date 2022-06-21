const { query } = require('../model/DBConnection');
const DBConnection = require('../model/DBConnection');

//{Classes: ["Shirt", "Pants"], Colours: ["Brown","Black"]}
function getItems(filters) {
    return new Promise((resolve, reject) => {

        console.log(filters)

        DBConnection.query("SELECT * FROM items", (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })
}

module.exports = { getItems }