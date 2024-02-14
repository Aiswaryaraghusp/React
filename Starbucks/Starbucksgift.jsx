import React, { useState } from 'react'
import { Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'

function Starbucksgift() {
    const [first, setfirst] = useState([{image1:"https://preprodtsbstorage.blob.core.windows.net/cms/uploads/17d2c94d_1bbe_47d5_874c_c32af5bb2c18_fc9ce3422f.png"
    ,title:"India Exclusive",text:"Bring in the festive season and make each celebration memorable.",btntext:"Add Item"},
    {image1:"https://preprodtsbstorage.blob.core.windows.net/cms/uploads/71d3780c_be6e_46b1_ab01_8a2bce244a7f_1_26502c2483.png"
    ,title:"Starbucks Coffee",text:"Starbucks is best when shared. Treat your pals to a good cup of coffee.",btntext:"Add Item"},
    {image1:"https://preprodtsbstorage.blob.core.windows.net/cms/uploads/7c6f7c64_3f89_4ba2_9af8_45fc6d94ad35_df43378185.jpg"
    ,title:"U Keep Me Warm",text:"Captivating, cosy, coffee. Gift your loved ones this Starbucks Gift Card.",btntext:"Add Item"},


])
  return (
    
    <div>
<Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        
        




          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">FEATURED</Nav.Link>
            <Nav.Link href="#action2">ANYTIME</Nav.Link>
            <Nav.Link href="#action2">CONGRATULATIONS</Nav.Link>
            <Nav.Link href="#action2">THANK YOU</Nav.Link>
            
            
            
           
          </Nav>
          
       
      </Container>
    </Navbar>

    <h2>Anytime</h2>
    <hr></hr>
    {first.map((display)=>
        <div style={{display:'inline-block',margin:50}}>
<Card style={{ width: '15rem'}} >
    <Container>
        <Row>
           <Col>
    <Card.Img  variant="top" src={display.image1} />
    </Col>
    <Col>
  
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
       
      <Button  style={{ marginleft:400}}variant="success">{display.btntext}</Button></div>
    </Row>
    
    </Container>
  </Card>
  </div>
  )}
 <h2>Congratulations</h2> 
 <hr></hr>
 <Card style={{ width: '15rem'}} >
    <Container>
        <Row>
           <Col>
    <Card.Img  variant="top" src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/97ee3280_2f05_43ad_bd94_f5c184d4f502_1_2d1b049023.png" />
    </Col>
    <Col>
  
    <Card.Body>
      <Card.Title>Congrats</Card.Title>
      <Card.Text>
      Coffee. Cheer. Celebrate. Enjoy each of your special moments with Starbucks.
      </Card.Text>
      
    </Card.Body>
    </Col>
    </Row>
    <Row>
    <div>
       
      <Button  style={{ marginleft:400}}variant="success">Add Item</Button></div>
    </Row>
    
    </Container>
  </Card>

  

    </div>
  )
}

export default Starbucksgift