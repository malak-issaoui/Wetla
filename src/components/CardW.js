import React from 'react'
import './Works.css'

const CardW = (props) => {
  return (
    <>
    <div className='box'>
        <div className='img'>
            <img src={props.cover} alt=''/>
        </div>
        <div className='deatils'>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    </div>
    </>
  )
}

export default CardW