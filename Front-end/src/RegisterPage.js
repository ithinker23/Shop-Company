import React, { useRef, useState} from 'react';
import Axios from 'axios';
import Notifs from './Notifs'

export default function RegisterPage() {
  
  var newUserNameRef=useRef()
  var newEmailRef=useRef()
  var newPasswordRef=useRef()

  const [notifs, setNotifs] = useState([]);

  function showNotifs(msg) {
    setNotifs(prevNotifs => {
      return [...prevNotifs, { text: msg }];
    })
  }


  const backendURL = 'http://localhost:5000';

  async function checkRegisterHandler(){
    if (!(newUserNameRef.current.value === "" || newEmailRef.current.value === "" || newPasswordRef.current.value === "")) {

      const formData = { Username: newUserNameRef.current.value, Email: newEmailRef.current.value, Password: newPasswordRef.current.value}
      try{
        var response = await Axios.post(backendURL + '/validify/register', formData)
        showNotifs(response.data.msg)
        window.location = "/login"
      }catch (err){
        showNotifs(err.response.data.msg)

      }

    }else{
      showNotifs("Input field(s) are empty")
    }
  }

  return (
    <>
      <input ref={newUserNameRef} type="text" ></input>
      <input ref={newEmailRef} type="email" ></input>
      <input ref={newPasswordRef} type="password" ></input>
      <button type='submit' onClick={checkRegisterHandler}>Click Me</button>
      <Notifs notifs={notifs}/>
    </>
  )
}
