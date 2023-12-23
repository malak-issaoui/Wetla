import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>  
        <footer className="footer-distributed">
            <div className='grid'>            
                <div className="footer-left">
                <h1>Wetla</h1>
                <p className='footer-links'>
                    <a href='/#'>HOME</a>|<a href='/#'>About us</a>|<a href='/#'>Gallery</a>|<a href='/#'>Destination</a></p>
                <p className='footer-company-name'>Copyright @2022<strong>EpiDeveloper</strong>All right reserved</p>
            </div>    
            <div className="footer-center">
                    <div >
                        <i className="fa fa-map-marker"></i>
                            <h1 className="text-uppercase"> <span>visit us</span></h1>
                            <p className="address">
                                123 center 
                                Avenue yesser arafet,<br/>
                                Sahloul, Sousse<br/>
                                +7777777</p>
                    </div>
            </div>
            <div className="footer-right">
                        <p className="footer-company-about">
                        <h1>Staticts</h1>
                        <h2>425</h2><p>Tourists</p>
                        <h2>125</h2><p>years</p>
                        <h2>325</h2><p>cottages</p>
                        <h2>120</h2><p>restaurants</p>
                        </p>
            </div>
                
            </div>  
        </footer>
        
    </>
  )
}

export default Footer