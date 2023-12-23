import React from 'react'
import Headtitle from '../Headtitle'
import Cardg from './Cardg'
import './Gallery.css'
import GalleryData from './GalleryData'

const Gallery = () => {
  return (
    <>
    <Headtitle/>
     <section className='gallery top'>
        <div className='container grid'>
            {GalleryData.map((value)=>{
                return <Cardg images={value.img} title={value.title}/>
            })
            }
        </div>
    </section> 
    </>
  )
}

export default Gallery