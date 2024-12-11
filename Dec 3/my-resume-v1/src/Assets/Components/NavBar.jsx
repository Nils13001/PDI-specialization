import React from 'react'
import '../CSS/NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
    <ul className='ul'>
        <li className='li'><Link to="/">Home</Link></li>
        <li className='li'><Link to="/about">About</Link></li>
        <li className='li'><Link to="/contact">Contact</Link></li>
    </ul>
    </div>
  )
}

export default NavBar