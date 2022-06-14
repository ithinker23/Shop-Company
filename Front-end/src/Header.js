import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className="header">
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
  )
}