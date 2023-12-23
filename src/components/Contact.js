import React, { useState } from 'react'
import Headtitle from '../Headtitle'
import './Contact.css'



const Contact = () => {
  const [fname,setFname] = useState('')
  const [lname,setlname] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  const[allValue,setAllvalue]=useState([])
  const formSubmit =(e) =>{
    e.preventDefault()

   const newValue={fname,lname,phone,email,message}
   setAllvalue([...allValue,newValue])
   setFname("")
   setEmail("")
   setlname("")
   setPhone("")
   setMessage("")
  }
  return (
    <>
    <Headtitle/>
    <section className='contact mtop'>
      <div className='container flex'>
        <div className='main-content'>
          <h2>Contact Form</h2>
          <p> Fill out the Form below</p>
          <form onSubmit={formSubmit}>
            <div className='grid1'>
              <div className='input'>
                <span>
                  First Name <label>*</label>
                </span>
                <input type='text' name='fname ' value={fname} onChange={(e)=>setFname(e.target.value)}/>
              </div>
              <div className='input'>
                <span>
                  Last Name <label>*</label>
                </span>
                <input type='text' name='lname ' value={lname} onChange={(e)=>setlname(e.target.value)}/>
              </div>
              <div className='input'>
                <span>
                  Phone Number <label>*</label>
                </span>
                <input type='text' name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
              </div>
              <div className='input'>
                <span>
                 Email <label>*</label>
                </span>
                <input type='email' name='email ' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className='input' >
                <span>Write your message <label>*</label>
                </span>
                <textarea name='message ' value={message} cols='30' rows='10' onChange={(e)=>setMessage(e.target.value)}/>
              </div>
            </div>
             <button className='primary-btn'>Submit Now</button> 
          </form>
          
        </div>
        <div className='side-content'>
                  <h3>   Visit our location    </h3>
                  <p>
                    fi blasa mata3refhech
                  </p>
                  <br/>
                  <h3>Message us</h3>
                  <span>info@wetla.com</span>
                  <br/>
                  <span>+0712225555</span>
        </div>
      </div>
    </section>
    <section className='show-data'>
      {allValue.map((currentValue)=>{
        const{fname,lname,email,phone,message}=currentValue
        return(
      
      <div className='sing-box'>
        <h1>Send Successfully</h1>
        <h3>
          First Name: <p>{fname}</p>
        </h3>
        <h3>
          Last Name: <p>{lname}</p>
        </h3>
        <h3>
          Phone Number : <p>{email}</p>
        </h3>
        <h3>
          Email: <p>{phone}</p>
        </h3>
        <h3>
          message: <p>{message}</p>
        </h3>
      </div>
      )
    })}
    </section>
  

    </>
  )
}

export default Contact