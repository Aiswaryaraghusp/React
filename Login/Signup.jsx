import React from 'react'
import './Siginup.css'
import axios from 'axios'
import { useState } from 'react'

function Signup() {
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const handlename = (event) =>{
    setName(event.target.value);
  };
  const handleemail = (event) =>{
    setEmail(event.target.value);
  };
   const handlepassword = (event) =>{
   setPassword(event.target.value);
  };
  const isPasswordValid = (password) =>{
    return password.length >= 8;
  };

  const handleSubmit = async(event) =>{
    event.preventDefault();
    const display=await axios.post('http://localhost:5000/Token',{Name,Email,Password})
    console.log(display.data)
   
  };


  
  return (
    <div  className='sign'><div className='sin'>
    <form>

        <label style={{color:'white'}}>Name</label><input type='text' className='inp1' value={Name} onChange={handlename}/>< br/><br/>
        
        <label style={{color:'white'}}>Email</label><input type='text'className='inp2' value={Email} onChange={handleemail}/>< br/><br/>
        <label style={{color:'white'}}>Password</label><input type='password'className='inp3' value={Password} onChange={handlepassword}/>< br/><br/>
        <button className='bt1' type='submit' onClick={handleSubmit}> Sign Up</button>
    </form></div></div>
  )
}

export default Signup