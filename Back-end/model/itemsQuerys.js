const DBConnection = require('../model/DBConnection');

function showDB() {
    DBConnection.query("SELECT * FROM items", (err, results) => {
        if (err) throw err
        console.log(results)
    })
}

function getItems() {
    return new Promise((resolve, reject) => {
        DBConnection.query("SELECT * FROM items", (err, res) => {
          if (err) reject(err)
          resolve(res)
          })
        })
      

    showDB();
}


module.exports = { getItems }