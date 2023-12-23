import React from 'react'
import Card from './Card'
import './Destination.css'

const Destination = () => {
  return (
    <>
     <section className='popular top'>
      <div className='full_container'>
        <div className='heading'>
          <h1>Most Popular Hotel</h1>
          <div className='line'></div>
        </div>
        <div className='content'>
          <Card/>
        </div>
      </div>
     </section>

    </>
  )
}

export default Destination