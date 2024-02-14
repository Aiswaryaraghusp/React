import React, { useState } from 'react'
import './Productcss.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Productadd() {
    
 
    const [Name, setName] = useState("")
    const [Type, setType] = useState("")
    const [Price, setPrice] = useState("")
  
    const handlename = (event) =>{
      setName(event.target.value);
    };
    const handletype = (event) =>{
      setType(event.target.value);
    };
     const handleprice = (event) =>{
     setPrice(event.target.value);
    };
    
    const handleSubmit = async(event) =>{
      event.preventDefault();
      const display=await axios.post('http://localhost:5000/Token',{Name,Type,Price})
      console.log(display.data)
     
    };
  return (
    <div className='product'> <div className='pin'>
    <form>

        <label style={{color:'white'}}>Product Name</label><input type='text' className='input1' value={Name}  onChange={handlename}/>< br/><br/>
        
        <label style={{color:'white'}}>Product Type</label><input type='text'className='input2'value={Type} onChange={handletype} />< br/><br/>
        <label style={{color:'white'}}>Product Price</label><input type='password'className='input3'value={Price}  onChange={handleprice}/>< br/><br/>
        <Link><button className='btn1' type='submit' onClick={handleSubmit}> Add</button></Link>
    </form></div></div>
  )
}

export default Productadd