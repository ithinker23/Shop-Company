import React, { useRef } from 'react';
import Axios from 'axios';
import Notifs from './Notifs'
import cookie from 'js-cookie'

export default function LoginPage() {
  const backendURL = 'http://localhost:5000'

  var usernameRef = useRef();
  var passwordRef = useRef();

  const notifsRef = useRef();

  async function checkLoginHandler(e) {
    if (!(usernameRef.current.value === "" || passwordRef.current.value === "")) {

      const formData = { Username: usernameRef.current.value, Password: passwordRef.current.value }

      try {
        var response = await Axios.post(backendURL + '/validify/login', formData, { withCredentials: true })
        console.log(response.headers)
        notifsRef.current.showNotifs(response.data.title, response.data.msg)


        window.location = "/user/" + usernameRef.current.value;
      } catch (err) {
        notifsRef.current.showNotifs(err.response.data.title, err.response.data.msg)
      }

    } else {
      notifsRef.current.showNotifs("Login Failed", "Input field(s) are empty")
    }
  }
  return (
    <>
      <div className='textField'>
        <input className="textInput" ref={usernameRef} type="text" />
        <span className="bar"></span>
        <label> Username </label>
      </div>
      <div className='textField'>
        <input className="textInput" ref={passwordRef} type="password" />
        <span className="bar"></span>
        <label> Password </label>
      </div>
      <div className='button' onClick={checkLoginHandler}>
        <div className="slide"></div>
        <div className='buttonText'>Login</div>
      </div>
      <Notifs ref={notifsRef} />
    </>
  )
}
