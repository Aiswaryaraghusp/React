import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './Starbuck4css.css'

function Starbucks4() {
    const [first, setfirst] = useState([{image1:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/112570.webp",image2:"https://www.starbucks.in/assets/icon/veg.svg"
,title:"Strawberry Milkshake",text:"A Delicious milkshake for those with a sweet tooth and love our favourite berry, Strawberry.",price:"₹ 367.50",btntext:"Add item"}
,{image1:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/112573.webp",image2:"https://www.starbucks.in/assets/icon/veg.svg"
,title:"Vanilla Milkshake",text:"Your favourite Vanilla milkshake is now at Starbucks. A perfect delight for any mood.",price:"₹ 367.50",btntext:"Add item"}

]

)
  return (
    <div><h3 style={{textAlign:'center'}}>Barista Recommends</h3 ><h4 style={{textAlign:'left'}}>View Menu</h4>
    {first.map((display)=>
        <div style={{display:'inline-block',margin:50,justifyContent:'center'}}>
<Card style={{ width: '15rem'}} >
    <Container>
        <Row>
           <Col>
    <Card.Img  variant="top" src={display.image1} />
    </Col>
    <Col>
    <Card.Img className='img2' variant="top" src={display.image2} />
    <Card.Body>
      <Card.Title>{display.title} </Card.Title>
      <Card.Text>
        {display.text}
      </Card.Text>
      
    </Card.Body>
    </Col>
    </Row>
    <Row>
    <div>
        <b>{display.price}</b>
      <Button  style={{ marginleft:400}}variant="success">{display.btntext}</Button></div>
    </Row>
    
    </Container>
  </Card>
  </div>
  )}
    </div>
  )
}

export default Starbucks4