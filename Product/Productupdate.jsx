import React from 'react'
import './Productcss.css'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
function Productupdate() {
  const {_id} = useParams()
const [Product, setProduct] = useState([])

    const navigate=useNavigate()

    useEffect(() => {
        axios.post("http://localhost:5000/Productupdate/${_id}")
             .then((res) => {
                 setProduct(res.data);
             })
    }, []);
    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleType = (event) => {
        setType(event.target.value);
    };

    

    const handlePrice = (event) => {
        setPrice(event.target.value);
    };

    const handleSubmit = async(event) => {
      event.preventDefault();
      const display = await axios.put("http://localhost:5000/Productupdate/",{Name,Type,Price})
     navigate(-1)
      console.log(display.data);
  }



const [Name, setName] = useState(Product.Name)
    const [Type ,setType] = useState(Product.Type)
   
    const [Price, setPrice] = useState(Product.Price)
  return (
    
    <div className='product'> <div className='pin'>
    <form>

        <label style={{color:'white'}}>Product Name</label><input type='text' className='input1' value={Product.Name}  onChange={handleName}/>< br/><br/>
        
        <label style={{color:'white'}}>Product Type</label><input type='text'className='input2'value={Product.Type} onChange={handleType} />< br/><br/>
        <label style={{color:'white'}}>Product Price</label><input type='password'className='input3'value={Product.Price}  onChange={handlePrice}/>< br/><br/>
        <button className='btn1' type='submit' onClick={handleSubmit}> Add</button>
    </form></div></div>
  )
}

export default Productupdate