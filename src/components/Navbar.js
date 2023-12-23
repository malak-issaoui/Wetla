import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'
import './Home.css'
const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <div className='container flex_space'>
            <div className='meni-icon'>
                <i className='fas fa-times'></i>
            </div>
            <ul className='nav-menu active'>
                <li><NavLink to ='/Home'>Home</NavLink></li>
                <li><NavLink to ='/about'>About</NavLink></li>
                <li><NavLink to ='/destination'>Destination</NavLink></li>
                <li><NavLink to ='/contact'>Contact us</NavLink></li>
                <li><NavLink to ='/Gallery'>Gallery</NavLink></li>
            </ul>
            <div className='login-area flex'>
                <li><NavLink to='/sign-in'>
                    <i className='far fa-chevron-right'>sign In</i>
                    </NavLink></li>
                <li><NavLink to='/Register'>
                    <i className='far fa-chevron-right'>Register</i>
                    </NavLink></li>
                <li><NavLink to='/contact'>
                    <button className='primary-btn'>Request a Quote</button>
                    </NavLink></li>
            </div>
            </div>

        </nav>
        <header>
            <div className='container flex_space'>
                <div className='box flex_space'>
                    <div className='icons'>
                        <i className='far fa-clock'></i>
                    </div>
                    <div className='text'>
                        <h4>Working Hours</h4>
                        <Link to='/contact'>Monday - Sunday: 9.00am to 6.00pm</Link>
                    </div>
                </div>
                <div className='box flex_space'>
                    <div className='icons'>
                      <i className='far fa-phone-volume'></i>
                    </div>
                    <div className='text'>
                      <h4>Call Us Hours</h4>
                        <Link to='/contact'>+077777777</Link>
                    </div>
                </div>
                <div className='box flex_space'>
                    <div className='icons'>
                        <i className='far fa-envelope'></i>
                    </div>
                    <div className='text'>
                        <h4>Mail Us</h4>
                        <Link to='/contact'>Wetla@gmail.com</Link>
                    </div>
                </div>
            </div>   
        </header>
        
    </>
  )
}

export default Navbar