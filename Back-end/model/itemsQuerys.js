const { query } = require('../model/DBConnection');
const DBConnection = require('../model/DBConnection');

function showDB() {
    DBConnection.query("SELECT * FROM items", (err, results) => {
        if (err) throw err
        console.log(results)
    })
}

//{Classes: ["Shirt", "Pants"], Colours: ["Brown","Black"]}
function getItems(filters) {
    return new Promise((resolve, reject) => {
        var query = ""

        if (filters.Classes.length > 0 || filters.Colours.length > 0) query = " WHERE ";

        for (var i = 0; i < filters.Classes.length; i++) {

            if (i != 0) query += "OR ";

            query += "Class = " + "'" + filters.Classes[i] + "' ";
        }

       

        for (var i = 0; i < filters.Colours.length; i++) {

            if (i != 0){ 

                query += "OR ";

            } else {

                if (filters.Classes.length > 0) query += " OR ";
            }

            query += "Colours = " + "'" + filters.Colours[i] + "' ";

        }

        console.log("SELECT * FROM items" + query)
        DBConnection.query("SELECT * FROM items" + query, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })
}

module.exports = { getItems }