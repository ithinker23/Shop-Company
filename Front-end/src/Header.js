import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from "./logo.png"
import cookie from 'js-cookie'
import cart from './cart.png'


export default function Header({ isAuth, username }) {

  const headerLinksRef = useRef();
  const headerUsernameRef = useRef();

  useEffect(() => {
    if (isAuth) {
      headerLinksRef.current.style.display = "none"
      headerUsernameRef.current.style.display = "flex"
    } else {
      headerLinksRef.current.style.display = "flex"
      headerUsernameRef.current.style.display = "none"
    }

  }, [isAuth])

  return (<>
    <div className="header">
      <div className='logoImageContainer'><img className='logoImage' src={logo} alt="LOGO"></img></div>

      <div className='headerLinks' ref={headerLinksRef}>
        <Link className='links' to="/">
          <div className='linkTitle'>
            Home
          </div>
        </Link>
        <Link className='links' to="/login">
          <div className='linkTitle'>
            Login
          </div>
        </Link>
        <Link className='links' to="/Register">
          <div className='linkTitle'>
            Register
          </div>
        </Link>
      </div>

      <div className='headerLinks' ref={headerUsernameRef}>
        <div className='headerUsername'>
          Welcome, {username}
        </div>
        <div className='headerLogout' onClick={() => {
          cookie.remove("LoggedInAs");
          window.location = "/";
        }}>
          Log Out
        </div>
        <div className='cartImageContainer'>
          <img className='cartImage' src={cart} alt="CART"></img>
        </div>
      </div>
    </div>

    <div className='headerShadow'></div>
  </>
  )
}