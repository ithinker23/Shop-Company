import React, { useEffect, useRef } from 'react'
import logo from "./logo.png"
import cookie from 'js-cookie'
import cart from './cart.png'
import search from './search.png'


export default function Header({ userInfo, handleSettingSearch, toggleCart }) {

  const headerLinksRef = useRef();
  const headerUsernameRef = useRef();
  const headerUsernameDisplayRef = useRef();
  const headerSearchBarRef = useRef();

  useEffect(() => {
    if (userInfo !== undefined) {
      if (userInfo.Name !== "") {
        headerLinksRef.current.style.display = "none"
        headerUsernameRef.current.style.display = "flex"
        headerUsernameDisplayRef.current.innerHTML = "Welcome, " + userInfo.Name;
      } else {
        headerLinksRef.current.style.display = "flex"
        headerUsernameRef.current.style.display = "none"
      }
    }
  }, [userInfo])

  function handleSearch() {
    handleSettingSearch(headerSearchBarRef.current.value)
  }

  return (
    <>
      <div className="header">
        <div className='headerInfo'>
        <div className='logoImageContainer'><img className='logoImage' src={logo} alt="LOGO"></img></div>
        <div className='headerUsername' ref={headerUsernameDisplayRef}></div>
        </div>
        <div className='searchBarContainer'>
          <input ref={headerSearchBarRef} className='searchBar' type="text"></input>
          <div className='searchImageContainer'><img className='searchImage' src={search} onClick={handleSearch} alt="SEARCH"></img></div>
        </div>

        <div className='headerLinks' ref={headerLinksRef}>
        <div className='headerButton button' onClick={() => {
            window.location = "/login";
          }}>
            <div className="slide"></div>
            <div className='buttonText'>LOGIN</div>
          </div>
          <div className='headerButton button' onClick={() => {
            window.location = "/register";
          }}>
            <div className="slide"></div>
            <div className='buttonText'>REGISTER</div>
          </div>
        </div>

        <div className='headerLinks' ref={headerUsernameRef}>
          <div className='headerButton button' onClick={() => {
            cookie.remove("Username");
            window.location = "/";
          }}>
            <div className="slide"></div>
            <div className='buttonText'>LOGOUT</div>
          </div>
          <div className='cartImageContainer' onClick={toggleCart}>
            <img className='cartImage' src={cart} alt="CART"></img>
          </div>
        </div>
      </div>
    </>
  )
}