import React from 'react'
import '../CSS/NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/operations">NumOps</Link></li>
    </ul>
    </div>
  )
}

export default NavBar