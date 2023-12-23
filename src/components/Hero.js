import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css' 
import Navbar from './Navbar'


const Hero = () => {
  return (
    <>
    <Navbar/>
  <section className='slider'>
    <img src='/images/slider-1.jpg' alt='' />
  </section>
  <section className='slide-form'>
    <div className='container'>
      <h2>Enjoy your holiday</h2>
      <span>Search and book hotel</span>
      <form action=''>
        <input type='text' placeholder='search Hotel' name='' id='' />
        <div className='flex_space'>
          <input type='date' placeholder='check In'/>
          <input type='date' placeholder='check Out'/>
        </div>
        <div className='flex_space'>
          <input type='number' placeholder='Adult(s)(+18)'/>
          <input type='number' placeholder='Children(0-17)'/>
        </div>
          <input type='number' placeholder='Rooms'/>
          <Link to='/Gallery'>
          <input type='Submit'  value='Search' className='Submit'placeholder='check In' />
          </Link>
              
      </form>
    </div>
  </section>
      
   
       
       </>       

    
  )
}

export default Hero


