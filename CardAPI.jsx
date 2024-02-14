import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Button, Card } from 'react-bootstrap'

function CardAPI() {
    const [first, setfirst] = useState([])
 useEffect(() => {
  axios.get("https://dummyjson.com/products").then((display)=>{
    setfirst(display.data.products)
    console.log(display.data.products)
  })
   
 }, [])
 
  return (
    <div><div>
{first.map((display)=>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={display.images[0]} />
      <Card.Body>
        <Card.Title>{display.title}</Card.Title>
        <Card.Text>
          {display.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
)}

</div>
    </div>
  )
}

export default CardAPI