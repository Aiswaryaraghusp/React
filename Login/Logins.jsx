import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

function Login() {
  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")

  const handleusername=(event)=>{
    setUsername(event.target.value);
  };
  const handlepassword=(event)=>{
    setPassword(event.target.value);
  };

  const handlesubmit=async(event)=>{

    event.preventDefault();
    const display= await axios.post('http://localhost:5000/Token2',{Username,Password})
    console.log(display.data)

  };


  return (
    <div>
        <div className='log'>
            <form>

                <label>Username</label><input type='text' className='in1' value={Username} onChange={handleusername}/>< br/><br/>
                <label>Password</label><input type='password'className='in2' value={Password} onChange={handlepassword}/>< br/><br/>
                <button className='b1' type='submit' onClick={handlesubmit}> Login</button>
            </form>

        

        </div>
    </div>
  )
}

export default Login