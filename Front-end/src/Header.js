import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className="header">
      <Link className='links' to="/login">Login</Link>
      <Link className='links' to="/Register">Register</Link>
      <Link className='links' to="/">Home</Link>

    </div>
  )
}
