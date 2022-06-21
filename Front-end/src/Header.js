import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from "./logo.png"
import cookie from 'js-cookie'
import cart from './cart.png'
import search from './search.png'


export default function Header({ userInfo, handleSettingSearch}) {

  const headerLinksRef = useRef();
  const headerUsernameRef = useRef();
  const headerUsernameDisplayRef = useRef();
  const headerSearchBarRef = useRef();

  useEffect(() => {
    if(userInfo != undefined){
      if (userInfo.Name != "") {
        headerLinksRef.current.style.display = "none"
        headerUsernameRef.current.style.display = "flex"
        headerUsernameDisplayRef.current.innerHTML ="Welcome, " + userInfo.Name;
      } else {
        headerLinksRef.current.style.display = "flex"
        headerUsernameRef.current.style.display = "none"
      }
    }
  }, [userInfo])

  function handleSearch(){
    handleSettingSearch(headerSearchBarRef.current.value)
  }

  return (
    <>
      <div className="header">
        <div className='logoImageContainer'><img className='logoImage' src={logo} alt="LOGO"></img></div>

        <div className='searchBarContainer'>
          <input ref={headerSearchBarRef} className='searchBar' type="text"></input>
          <div className='searchImageContainer'><img className='searchImage' src={search} onClick={handleSearch}></img></div>
        </div>

        <div className='headerLinks' ref={headerLinksRef}>
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
          <div className='headerUsername' ref={headerUsernameDisplayRef}>

          </div>
          <div className='headerLogout' onClick={() => {
            cookie.remove("Username");
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