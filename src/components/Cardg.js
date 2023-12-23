

import React, { useState } from 'react'
import Model from './Model';



const Cardg = (props) => {
  const[openModal,setopenModal]=useState(false);
  
  
  
  
  
  return (
    <>
    <div className='items'>
        <div className='img'>
            <img src={props.images} alt=""/>
            <i className='fas fa-image' ></i>
        </div>
        <div className='title'>
            <h3>{props.title}</h3>
        </div>
            <div>
             <button className='primary-btn' onClick={()=> setopenModal(true)} >BOOK NOW</button>
             <Model open={openModal} onclose={()=> setopenModal(false)}/>
             </div>
              
             
        
      
            </div>

    </>
  )
}

export default Cardg