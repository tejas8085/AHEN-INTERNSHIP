import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';




export default function Navbar() {
  return (
    <div className='navbody'>
            <div className='logo'>
                <Link to="/" style={{ textDecoration: 'none',color:'white'}}>AHEN</Link>
            </div>
		


  	<input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	<label for="menu-icon"></label>
  	<nav class="nav"> 		
  		<ul class="pt-5">
  			<li><Link to="/" style={{ textDecoration: 'none'}}>Home</Link></li>
  			<li><Link to="/about" style={{ textDecoration: 'none'}}>About</Link></li>
  			<li><Link to="/bookings" style={{ textDecoration: 'none'}}>Bookings</Link></li>
  			<li><Link to="/contact" style={{ textDecoration: 'none'}}>Contact</Link></li>
  		</ul>
  	</nav>
    </div>
  )
}
