const DBConnection = require('../model/DBConnection');

function showDB() {
  DBConnection.query("SELECT * FROM accounts", (err, results) => {
    if (err) throw err
    console.log(results)
  })
}

function createAccountDB(account) { 
  const d = new Date().toDateString().split(" ")

  switch (d[1]) {
    case "Jan":
      d[1] = "01"
      break;
    case "Feb":
      d[1] = "02"
      break;
    case "Mar":
      d[1] = "03"
      break;
    case "Apr":
      d[1] = "04"
      break;
    case "May":
      d[1] = "05"
      break;
    case "Jun":
      d[1] = "06"
      break;
    case "Jul":
      d[1] = "07"
      break;
    case "Aug":
      d[1] = "08"
      break;
    case "Sep":
      d[1] = "09"
      break;
    case "Oct":
      d[1] = "10"
      break;
    case "Nov":
      d[1] = "11"
      break;
    default:
      d[1] = "12"
      break;
  }

  DBConnection.query("INSERT INTO accounts (Username, Email, Password, Joined) VALUES ('" + account.Username + "', '" + account.Email + "', '" + account.Password + "', '"+ d[3] + "" + d[1] + "" + d[2] +"')")
  showDB();
}

function findAccount(col, pred) {
  return new Promise((resolve, reject) => {
    DBConnection.query("SELECT * FROM accounts WHERE " + col + " = '" + pred + "'", (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res[0])
      }
    })
  })
}

module.exports = { createAccountDB, findAccount }