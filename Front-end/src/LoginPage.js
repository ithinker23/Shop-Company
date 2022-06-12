import React, { useRef, useState } from 'react';
import Axios from 'axios';
import Notifs from './Notifs'

export default function LoginPage() {
  const backendURL = 'http://localhost:5000'

  const [notifs, setNotifs] = useState([]);

  var usernameRef = useRef();
  var passwordRef = useRef();

  function showNotifs(msg) {
    setNotifs(prevNotifs => {
      return [...prevNotifs, { text: msg }];
    })
  }

  async function checkLoginHandler(e) {
    if (!(usernameRef.current.value === "" || passwordRef.current.value === "")) {

      const formData = { Username: usernameRef.current.value, Password: passwordRef.current.value }

      try {
        var response = await Axios.post(backendURL + '/validify/login', formData)

        showNotifs(response.data.msg)

        window.location = "/"
      } catch (err) {
        showNotifs(err.response.data.msg)
      }

    } else {
      showNotifs("Input field(s) are empty")
    }
  }
  return (
    <>
      <input ref={usernameRef} type="text" ></input>
      <input ref={passwordRef} type="password" ></input>
      <button type='submit' onClick={checkLoginHandler}>Click Me</button>
      <Notifs notifs={notifs}/>
    </>
  )
}
