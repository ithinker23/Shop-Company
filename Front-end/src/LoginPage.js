import React, { useRef } from 'react';
import Axios from 'axios';

export default function LoginPage() {
  const backendURL = 'http://localhost:5000'

  var usernameRef = useRef();
  var passwordRef = useRef();

  async function checkLoginHandler(e) {
    if (!(usernameRef.current.value === "" || passwordRef.current.value === "")) {

      const formData = { Username: usernameRef.current.value, Password: passwordRef.current.value }

      try {
        await Axios.post(backendURL + '/validify/login', formData)
        window.location = "/"
      } catch (err) {
        console.log(err.response)
      }

    } else {

      alert('input fields are empty');
    }
  }
  return (
    <>
      <input ref={usernameRef} type="text" ></input>
      <input ref={passwordRef} type="password" ></input>
      <button type='submit' onClick={checkLoginHandler}>Click Me</button>
    </>
  )
}
