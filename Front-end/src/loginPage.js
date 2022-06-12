import React, { useRef, useState } from 'react';
import Axios from 'axios';
import Notif from './Notif'

export default function LoginPage() {
  const backendURL = 'http://localhost:5000'

  const [notif, setNotif] = useState({text: "", displayMsg:false});

  var usernameRef = useRef();
  var passwordRef = useRef();

  async function checkLoginHandler(e) {
    if (!(usernameRef.current.value === "" || passwordRef.current.value === "")) {

      const formData = { Username: usernameRef.current.value, Password: passwordRef.current.value }

      try {
        var response = await Axios.post(backendURL + '/validify/login', formData)
        setNotif(prevNotif => {
          return {text: response.data.msg, displayMsg:true};
        })
        window.location = "/"
      } catch (err) {
        setNotif(prevNotif => {
          return {text: err.response.data.msg, displayMsg:true};
        })
      }

    } else {

      setNotif(prevNotif => {
        return {text: "input fields are empty", displayMsg:true};
      })
    }
  }
  return (
    <>
      <input ref={usernameRef} type="text" ></input>
      <input ref={passwordRef} type="password" ></input>
      <button type='submit' onClick={checkLoginHandler}>Click Me</button>
      <Notif msg={notif}/>
    </>
  )
}
