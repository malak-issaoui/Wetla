import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Headtitle.css'

const Headtitle = () => {
    const location = useLocation()
  return (
    <>
    <section className='image-heading'>
        <div className='container'></div>
        <h1>{location.pathname.split("/")[1]}</h1>
        <button>
            <Link to='/Home'>Home</Link>
            <span>{location.pathname.split("/")[1]}</span>
        </button>
    </section>

    </>
  )
}

export default Headtitle