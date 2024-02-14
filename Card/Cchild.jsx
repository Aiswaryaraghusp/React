import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Cchild({val1,val2,val3,val4}) {
    function sample(){
    val2(val3)
    }
  return (
    <div>
        {val1.map((display)=>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={display.image} />
    <Card.Body>
      <Card.Title>{display.name}</Card.Title>
      <Card.Text>
        {display.color}
      </Card.Text>

      
    </Card.Body>
  </Card>
  
  )}
  <Button variant="primary"  onClick={sample}>Go somewhere</Button>
  </div>
  )
}

export default Cchild