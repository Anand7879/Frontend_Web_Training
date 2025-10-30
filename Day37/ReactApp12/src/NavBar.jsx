import React from 'react'
import  './Navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div id = 'Nav'>
        <Link to='/'>
        <p>Home</p>
        </Link>
         <Link>
        <p>About</p>
        </Link>
         <Link to='/signup'>
        <p>SignUp</p>
        </Link>
         <Link to='/login'>
        <p>Login</p>
        </Link>
    </div>
  )
}

export default NavBar








