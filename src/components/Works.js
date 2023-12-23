import React from 'react'
import CardW from './CardW'
import Wdata from '../workdata'
import './Works.css'


const Works = () => {
  return (
    <>
    <section className='popular works'>
        <div className='container'>
        <div className='heading'>
            <h1> Wetla benifts </h1>
            <div className='line'></div>
        </div>
        <div className='content'>
        
            {Wdata.map((value,index) =>{
                return <CardW key={index} cover={value.cover} title={value.title} desc={value.desc} />
})}
         
        </div>
        </div>
        
    </section>
    

    </>
 
)}

export default Works