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
        var query = "";

        for (var i = 0; i < filters.Classes.length(); i++) {
            if (i == 0) {
                query += "Class = " + filter.Classes[i];
            } else {
                query += "OR" + "Class = " + filter.Classes[i];
            }
        }

        if (filters.Classes.length > 0) {
            query += "OR"
        }

        for (var i = 0; i < filters.Colours.length(); i++) {
            if (i == 0) {
                query = "Colours = " + filter.Classes[i];
            } else {
                query = query + "OR" + "Colours = " + filter.Classes[i];
            }
        }

        console.log(query);

        DBConnection.query("SELECT * FROM items", (err, res) => {
          if (err) reject(err)
          resolve(res)
          })
        })


        showDB();
}

module.exports = { getItems }