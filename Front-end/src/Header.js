import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
export default function Header({ loggedIn, username }) {

  const headerLinksRef = useRef();
  const headerUsernameRef = useRef();

  useEffect(() => {
    if (loggedIn) {
      headerLinksRef.current.style.display = "none"
      headerUsernameRef.current.style.display = "flex"
    } else {
      headerLinksRef.current.style.display = "flex"
      headerUsernameRef.current.style.display = "none"
    }

  }, [loggedIn])

  return (<>
    <div className="header">
      <div className='logoImageContainer'><img className='logoImage' src="logo.png" alt="LOGO"></img></div>

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
        <div className='headerUsername'>
          CART 
        </div>
      </div>
    </div>

    <div className='headerShadow'></div>
  </>
  )
}