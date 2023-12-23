import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import Headtitle from '../Headtitle'
import './design.css'

const Signin = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const[allValue,setAllvalue]=useState([])
  const formSubmit =(e) =>{
    e.preventDefault()

   const newValue={email,password}
   setAllvalue([...allValue,newValue])
   
   setEmail("")
   setPassword("")
   
  }
  
  return (
    <>
    <Headtitle/>
    <section className='forms top'>
      <div className='container'>
        <div className='sign-box'>
          <p>Enter your e-mail and password below to log in to your account and use the benefits of our website</p>
          <form onSubmit={formSubmit}>
            <input type='text' name='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type='password' name='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <div className='flex_space'>
            <div className='flex'>
                <input type='checkbox'/>
                <label> Rember me</label>
            </div>
             <div className='flex'>
                <span>I forget my password</span>
            </div>
            </div>
              <button type='submit' className='primary-btn'>
              Sign In
              </button>
              <p>
              Dont Have Account <Link to='/register'> signup</Link>
              </p>
             
          </form>
        </div>
      </div>
      </section>
      <section className='show-data'>
      {allValue.map((currentValue)=>{
        const{email,password}=currentValue
        return(
      
      <div className='sing-box'>
        <h1>Send Successfully</h1>
        <h3>
          Email: <p>{email}</p>
        </h3>
        <h3>
          Password: <p>{password}</p>
        </h3>
        </div>
      )
    })}
        </section>
    
    </>
  )
}

export default Signin