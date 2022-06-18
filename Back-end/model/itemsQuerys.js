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

        for(var i = 0; i < filters.Classes.length; i++){
            if(i == 0){
                query += " WHERE "
            } else {
                query += " OR "
            }
            
            query +=  "( Class = " + "'" +filters.Classes[i] + "'"

            for(var x = 0; x < filters.Colours.length; x++){
                if(x == 0){
                    query += " AND ("
                }else{
                    query += " OR "
                }
                query += "Colours = " + "'" + filters.Colours[x] + "'"
            }
            query += '))'
               
        }

        console.log("SELECT * FROM items" + query)
        DBConnection.query("SELECT * FROM items" + query, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })
}

module.exports = { getItems }