const { query } = require('../model/DBConnection');
const DBConnection = require('../model/DBConnection');

//{Classes: ["Shirt", "Pants"], Colours: ["Brown","Black"]}
function getItems(filters) {
    return new Promise((resolve, reject) => {
        DBConnection.query("SELECT * FROM items", (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })
}

module.exports = { getItems }