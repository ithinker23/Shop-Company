import React, { useState, useRef, useEffect } from 'react';
import Axios from 'axios';

const { v4: uuidv4 } = require('uuid');


export default function LoginPage() {
  const backendURL = 'http://localhost:5000'

  var usernameRef = useRef();
  var passwordRef = useRef();
  
  function checkLoginHandler(e){
    if(!(usernameRef.current.value == "" || passwordRef.current.value == "")){
    const formData = {username: usernameRef.current.value, password: passwordRef.current.value}
     // console.log(usernameRef.current.value + " " + passwordRef.current.value)
      //console.log(formData)
    Axios.post(backendURL +'/loginChecker/validifyLogin', formData)

    }else{

      alert('input fields are empty');
    }
  }
  return (
    <>
      <input ref={usernameRef} type="email" ></input>
      <input ref={passwordRef} type="password" ></input>
      <button type='submit' onClick={checkLoginHandler}>Click Me</button>
    </>
  )
}
