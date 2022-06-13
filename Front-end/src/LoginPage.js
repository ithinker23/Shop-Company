import React, { useRef } from 'react';
import Axios from 'axios';
import Notifs from './Notifs'

export default function LoginPage() {
  const backendURL = 'http://localhost:5000'

  var usernameRef = useRef();
  var passwordRef = useRef();

  const notifsRef = useRef();

  async function checkLoginHandler(e) {
    if (!(usernameRef.current.value === "" || passwordRef.current.value === "")) {

      const formData = { Username: usernameRef.current.value, Password: passwordRef.current.value }

      try {
        var response = await Axios.post(backendURL + '/validify/login', formData)

        notifsRef.current.showNotifs(response.data.title,response.data.msg)

        window.location = "/"
      } catch (err) {
        notifsRef.current.showNotifs(err.response.data.title,err.response.data.msg)
      }

    } else {
      notifsRef.current.showNotifs("Login Failed","Input field(s) are empty")
    }
  }
  return (
    <>
      <input ref={usernameRef} type="text" ></input>
      <input ref={passwordRef} type="password" ></input>
      <button type='submit' onClick={checkLoginHandler}>Click Me</button>
      <Notifs ref={notifsRef} />
    </>
  )
}
