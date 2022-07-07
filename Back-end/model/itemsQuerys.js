const DBConnection = require('../model/DBConnection');

// filters will be in the form of { Class: '', Price: '', Colours: [], Search: '' } when empty
// this function will have to consume an object named filters, in our case, and using SQL to retrieve items from the database
function getItems(filters) {

    console.log(filters.Search.Class)

    var query = ""

    if (filters.Class == "" && filters.Price == null && filters.Colours.length == 0 && filters.Search == "") {
        query += "SELECT * FROM items"
    } else {
        query += "SELECT * FROM items WHERE "

        if (filters.Class != "") {
            query += "Class = " + "'" + filters.Class + "'"

            if(filters.Price != null || filters.Colours.length != 0 || filters.Search != ""){
                query += " AND "
            }
        }
        
        if (filters.Price != null) {
            query += "Price ";

            if(filters.Price >= 200) {query += ">= " + "'" + filters.Price + "'"}
            else {query += "<= " + "'" + filters.Price + "'"}

            if(filters.Colours.length != 0 || filters.Search != ""){
                query += " AND "
            }
        }

        if (filters.Colours.length != 0) {
            for (let x = 0; x < filters.Colours.length; x++ ) {
                if (x==0) {
                    query += "Colours = " + "'" + filters.Colours[x] + "'"
                } else {
                    query += " OR Colours = " + "'" + filters.Colours[x] + "'"
                }
            }
            if(filters.Search != ""){
                query += " AND "
            }
        }

        if (filters.Search != "") {
            query += "Price LIKE " + "'%" + filters.Search + "%'" + "OR Class LIKE " + "'%" + filters.Search + "%'"
        }

    }
    
    return new Promise((resolve, reject) => {
        DBConnection.query(query, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })
}

module.exports = { getItems } 