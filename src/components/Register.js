import React ,{ useState }from 'react'
import Headtitle from '../Headtitle'

const Register = () => {
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
          <p>Enter your informations below to CREATE to your account and use the benefits of our website</p>
          <form onSubmit={formSubmit}>
            <input type='text' name='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type='password' name='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            
              <span>confirm your password</span>
              <input type='password' name='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
              <button type='submit' className='primary-btn'>
              Sign UP
              </button>
              
             
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

export default Register