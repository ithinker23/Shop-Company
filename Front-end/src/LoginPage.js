import React, { useRef } from 'react';
import Axios from 'axios';
import Notifs from './Notifs'
import {Link} from 'react-router-dom'

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
        notifsRef.current.showNotifs(response.data.title, response.data.msg , response.data.color)

        setTimeout(()=>{
          window.location = "/user/" + usernameRef.current.value;
        },1000)

      } catch (err) {
        notifsRef.current.showNotifs(err.response.data.title, err.response.data.msg, err.response.data.color)
      }

    } else {
      notifsRef.current.showNotifs("Login Failed", "Input field(s) are empty", "#ff4c4c")
    }
  }
  return (
    <>

      <div className='formContainer'>
        <div className='form'>
          <div className="formInputFields">
            <div className="formInputHeader">LOGIN</div>
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
            <div className='formRedirectLink'>
              Don't have an account? click <Link to="/register">HERE</Link>
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
