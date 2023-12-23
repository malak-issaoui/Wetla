import React from 'react'
import Works from './Works'
import About from './About'
import Destination from './Destination'
import  Hero  from './Hero'
import './Home.css'
import Footer from './Footer'

const Home = () => {
  return (
    <>
         
        <Hero/>
        <About/>
        <Destination/>
        <Works/>
        <Footer/>
        
        </>
  )
}

export default Home