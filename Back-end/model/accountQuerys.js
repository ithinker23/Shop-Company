const mysql = require('mysql');


const DBConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shop app"
  });
  
  DBConnection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


function createAccountDB(account){ 
    DBConnection.query("INSERT INTO accounts (Username, Email, Password, Joined) VALUES ('"+ account.Username +"', '"+ account.Email +"', '"+ account.Password +"', '"+ account.Joined +"')")

    showDB();
}

function showDB(){
  DBConnection.query("SELECT * FROM accounts", (err, results) => {
    if(err) throw err
    console.log(results)
  })
}

function findAccount(account){
    
}

createAccountDB({Username: "Ryan", Email: "ryancyae@gmail.com", Password: '12345', Joined: 2022-06-09})

module.exports = {createAccountDB, findAccount}