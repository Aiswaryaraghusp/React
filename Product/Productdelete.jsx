import axios from 'axios';
import React, { useState } from 'react'
import './Productcss.css'


function Productdelete() {
    const [id, setid] = useState("")
    const handleid = (event) =>{
        setid(event.target.value);
      };
      const handleSubmit = async(event) =>{
        event.preventDefault();
        const display=await axios.delete('http://localhost:5000/Deleteproduct/:id')
        console.log(display.data)
       
      };
  return (
    <div className='product'><div className='pin'>
    <form>

        <label style={{color:'white'}}>Product id</label><input type='text' className='input1' value={id}  onChange={handleid}/>< br/><br/>
        
\        <button className='btn1' type='submit' onClick={handleSubmit}> Delete</button>
    </form></div></div>
  )
}

export default Productdelete