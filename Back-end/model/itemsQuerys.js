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
        console.log(filters)
        var query = "";

        for (var i = 0; i < filters.Classes.length; i++) {
            if (i == 0) {
                query += "Class = " + filters.Classes[i];
            } else {
                query += " OR " + "Class = " + filters.Classes[i];
            }
        }

        for (var i = 0; i < filters.Colours.length; i++) {
            if (i == 0) {

                if (filters.Classes.length > 0) {
                    query += " OR "
                }
                query += "Colours = " + filters.Classes[i];

            } else {
                query += " OR " + "Colours = " + filters.Classes[i];
            }
        }

        console.log(query);

        DBConnection.query("SELECT * FROM items WHERE " + query, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })
}

module.exports = { getItems }