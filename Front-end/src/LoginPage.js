import React, { useState, useRef, useEffect } from 'react';
const { v4: uuidv4 } = require('uuid');


export default function LoginPage() {
  const accounts = [['JOE', "MAMA"], ['YO', "PAPA"], ["GO","DADA"]]

  var usernameRef = useRef();
  var passwordRef = useRef();

  function checkLoginHandler(){
     var usernameVal = usernameRef.current.value
     var passwordVal = passwordRef.current.value

    if (usernameVal == "" || passwordVal == "") {
      alert('Please provide both a username and password')
        
    } else {
      
      var found = accounts.find(account => account[0] == usernameVal && account[1] == passwordVal)
      
      if (found) {
        return true

      } else {

        usernameRef.current.value = ""
        passwordRef.current.value = ""
        alert("Invalid username or password")
      }
  }
}

  return (
    <>
    <form>
      <input ref={usernameRef} type="email" required></input>
      <input ref={passwordRef} type="password" required></input>
      <button type='submit' onClick={checkLoginHandler}>CLick ME</button>
    </form>
    </>
  )
}
