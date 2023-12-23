import React from 'react'

import './About.css'


const About = () => {
  return (
    <>
      
      <section className='about top '>
        <div className='container'>
          <div className='aboutCard ,top flex_space'>
            <div className='row row1'>
              <h4>about us</h4>
              <h1>
                 <span>we provide solution </span>
              </h1>
              <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='row image'>
              <img src='/images/about-img-1.jpg' alt='' />
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About