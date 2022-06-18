import React, { useRef } from 'react';
import Axios from 'axios';
import Notifs from './Notifs'

export default function RegisterPage() {

  var newUserNameRef = useRef()
  var newEmailRef = useRef()
  var newPasswordRef = useRef()
  var newFirstNameRef = useRef();

  const notifsRef = useRef();

  const backendURL = 'http://localhost:5000';

  async function checkRegisterHandler() {
    if (!(newUserNameRef.current.value === "" || newEmailRef.current.value === "" || newPasswordRef.current.value === "" || newFirstNameRef.current.value === "")) {

      const formData = { Username: newUserNameRef.current.value, Email: newEmailRef.current.value, Password: newPasswordRef.current.value, FirstName: newFirstNameRef.current.value }
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
      <div className='formContainer'>
        <div className='form'>
          <div className="formInputFields">
            <div className="formInputHeader">REGISTER</div>
            <div className='textField'>
              <input class="textInput" ref={newUserNameRef} type="text" />
              <span className="bar"></span>
              <label> Username </label>
            </div>
            <div className='textField'>
              <input class="textInput" ref={newFirstNameRef} type="text" />
              <span className="bar"></span>
              <label> First Name </label>
            </div>
            <div className='textField'>
              <input class="textInput" ref={newEmailRef} type="email" />
              <span className="bar"></span>
              <label> Email </label>
            </div>
            <div className='textField'>
              <input class="textInput" ref={newPasswordRef} type="password" />
              <span className="bar"></span>
              <label> Password </label>
            </div>

            <div className='button' onClick={checkRegisterHandler}>
              <div className="slide"></div>
              <div className='buttonText'>Register</div>
            </div>
          </div>
        </div>
        <div className="formCover">
          <div className="formCoverText">
            SHOP APP
          </div>
          <div className="formCoverUnderline"></div>
        </div>
      </div>
    
      <Notifs ref={notifsRef} />
    </>
  )
}
