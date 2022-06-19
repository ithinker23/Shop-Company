import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom'
import Axios from 'axios'

export default function ProtectedRoute({ ...rest }) {

  const backendURL = 'http://localhost:5000'
  const searchParams = useParams();
  var [isAuth, setIsAuth] = useState();

  useEffect(() => {
    async function authenticateCookies() {
      var response = await Axios.post(backendURL + "/cookieAuth/", { Username: searchParams.username }, { withCredentials: true })
      if (response.data.error) {
        window.location = "/";
      } else {
        setIsAuth(response.data.isCorrectHash);
      }
    }
    authenticateCookies()
  })


  if (isAuth === undefined) {
    return <div>LOADING</div>
  } else {
    return isAuth ? <Outlet context={isAuth} /> : <Navigate to="/" />;
  }
}