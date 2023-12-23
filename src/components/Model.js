import React,{ useState } from 'react'
import './Modal.css'

const Model = ({open,onclose}) => {
  const [Age,setAge] = useState('')
  const [AgeM,setAgeM] = useState('')
  const [Rooms,setRooms] = useState('')
  const [Duration,setDuration] = useState('')
  const[allValue,setAllvalue]=useState([])
    const formSubmit =(e) =>{
      e.preventDefault()
      const newValue={Age,AgeM,Rooms,Duration}
      setAllvalue([...allValue,newValue])
      setAge("")
      setAgeM("")
      setDuration("")
      setRooms("")}
    if(!open) return null ;
    
  return (

    <div>
        <div className='overlay'>
        
              <div className='popup'>
                <div className='modalContainer'>
                  <h2>Enjoy your holiday</h2>
                  <form onSubmit={formSubmit}>
                  
                <input type='number' placeholder='Adult(s)(+18)'value={Age} onChange={(e)=>setAge(e.target.value)}/><br/>
                <input type='number' placeholder='Children(0-17)'value={AgeM} onChange={(e)=>setAgeM(e.target.value)}/><br/>
                <input type='number' placeholder='Rooms' value={Rooms} onChange={(e)=>setRooms(e.target.value)}/><br/>
                <input type='number' placeholder='duration'value={Duration} onChange={(e)=>setDuration(e.target.value)}/><br/>
                <button className='primary-btn'  >Submit</button><br/>
                </form>
                <button   onClick={onclose} className='closebtn'>close</button>
                </div>
              </div>
            
            </div>
    </div>
  )
}

export default Model