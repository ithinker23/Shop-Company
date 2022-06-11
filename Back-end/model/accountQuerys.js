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

    DBConnection.query("SELECT username FROM accounts WHERE username = ' "+ account.Username+" ')", (err,res) => {
      if(err) throw err

      if(res == null){
        DBConnection.query("INSERT INTO accounts (Username, Email, Password, Joined) VALUES ('"+ account.Username +"', '"+ account.Email +"', '"+ account.Password +"', '"+ account.Joined +"')")
      }else{
        console.log('Account with username already exists, cannot create another account')
      }

    })

    showDB();
}

function showDB(){
  DBConnection.query("SELECT * FROM accounts", (err, results) => {
    if(err) throw err
    console.log(results)
  })
}

function findAccount(account){

    DBConnection.query("SELECT * FROM accounts WHERE Username='"+account.Username+"'", (err,res) => {
      if(err) throw err
      
    })
}

module.exports = {createAccountDB, findAccount}