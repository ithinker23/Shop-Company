import React, { useRef } from 'react';
import Axios from 'axios';
import Notifs from './Notifs'

export default function RegisterPage() {

  var newUserNameRef = useRef()
  var newEmailRef = useRef()
  var newPasswordRef = useRef()

  const notifsRef = useRef();

  const backendURL = 'http://localhost:5000';

  async function checkRegisterHandler() {
    if (!(newUserNameRef.current.value === "" || newEmailRef.current.value === "" || newPasswordRef.current.value === "")) {

      const formData = { Username: newUserNameRef.current.value, Email: newEmailRef.current.value, Password: newPasswordRef.current.value }
      try {
        var response = await Axios.post(backendURL + '/validify/register', formData)
        notifsRef.current.showNotifs(response.data.title, response.data.msg)
        window.location = "/login"
      } catch (err) {
        notifsRef.current.showNotifs(err.response.data.title, err.response.data.msg)

      }

    } else {
      notifsRef.current.showNotifs("Registration Failed", "Input field(s) are empty")
    }
  }

  return (
    <>
      <div className='textField'>
        <input ref={newUserNameRef} type="text" />
        <span className="bar"></span>
        <label> Username </label>
      </div>
      <div className='textField'>
        <input ref={newEmailRef} type="email" />
        <span className="bar"></span>
        <label> Email </label>
      </div>
      <div className='textField'>
        <input ref={newPasswordRef} type="password" />
        <span className="bar"></span>
        <label> Password </label>
      </div>

      <div className='button' onClick={checkRegisterHandler}>
        <div className="slide"></div>
        <div className='buttonText'>Register</div>
      </div>
      <Notifs ref={notifsRef} />
    </>
  )
}
