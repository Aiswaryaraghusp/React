import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CardAPI4() {
    const [first, setfirst] = useState([])
    useEffect(() => {
     axios.get("https://jsonplaceholder.typicode.com/photos").then((display)=>{
        setfirst(display.data)
       console.log(display)
     })
      
    }, [])
  return (
    <div><div>{first.map((display)=>

        <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>{display.title}</Card.Title>
                <Card.Text>
                {display.name}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
        )}</div></div>
  )
}

export default CardAPI4