import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

function Productdisplay() {
  const { _id } = useParams();
    const [first, setfirst] = useState([])
    useEffect(()=>{
      axios.get("http://localhost:5000/Getproduct").then((display)=>{
        setfirst(display.data)
      })
    },[])



    const handleDelete = async (event) => {
      event.preventDefault();
  
    
        await axios.delete(`http://localhost:5000/deleteproduct/${_id}`);
        console.log("Product deleted");
      
      
    }
  return (

    <div>
      { first.map((display)=>
<Card style={{ width: '18rem',display:'flex',flexDirection:'row' }}>
 
      <Card.Body>
        <Card.Title>{display.Name}</Card.Title>
        <Card.Text>
          {display.Type}
        </Card.Text>
        <Card.Text>
          {display.Price}
        </Card.Text>
        <Button variant="primary" onClick={handleDelete}>Delete</Button>
        <Link to="/Updateproduct"><Button variant="primary" >Edit</Button></Link>
      </Card.Body>
    </Card>
)}
<Link to="/Addproduct"><Button type='submit' >Add product</Button></Link>
    </div>
  
  )
      }

export default Productdisplay