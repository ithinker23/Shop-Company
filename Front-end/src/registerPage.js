import React, { useRef } from 'react';
import Axios from 'axios';

export default function RegisterPage() {
  
  var newUserNameRef=useRef()
  var newEmailRef=useRef()
  var newPasswordRef=useRef()

  const backendURL = 'http://localhost:5000';

  function checkRegisterHandler(){
    if (!(newUserNameRef.current.value === "" || newEmailRef.current.value === "" || newPasswordRef.current.value === "")) {

      const formData = { Username: newUserNameRef.current.value, Email: newEmailRef.current.value, Password: newPasswordRef.current.value}

      Axios.post(backendURL + '/validify/register', formData)
    }
  }

  return (
    <>
      <input ref={newUserNameRef} type="text" ></input>
      <input ref={newEmailRef} type="email" ></input>
      <input ref={newPasswordRef} type="password" ></input>
      <button type='submit' onClick={checkRegisterHandler}>Click Me</button>
    </>
  )
}
