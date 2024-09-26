import React from 'react'
import { Link, Element } from 'react-scroll';
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">aa</div>
      <ul className="nav-list">
        <li><Link to='home' className='nav-item' smooth={true} duration={500}>Home</Link></li>
        <li><Link to='about' className='nav-item' smooth={true} duration={500}>About</Link></li>
        <li><Link to='services' className='nav-item' smooth={true} duration={500}>Services</Link></li>
        <li><Link to='contact' className='nav-item' smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
