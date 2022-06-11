import React, {useRef} from 'react';
import Axios from 'axios';

export default function LoginPage() {
  const backendURL = 'http://localhost:5000'

  var usernameRef = useRef();
  var passwordRef = useRef();
  
  function checkLoginHandler(e){
    if(!(usernameRef.current.value === "" || passwordRef.current.value === "")){
    const formData = {Username: usernameRef.current.value, Password: passwordRef.current.value}
     // console.log(usernameRef.current.value + " " + passwordRef.current.value)
      //console.log(formData)
    Axios.post(backendURL +'/loginChecker/validifyLogin', formData).then((response) => {
      console.log(response)
    })

    }else{

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
