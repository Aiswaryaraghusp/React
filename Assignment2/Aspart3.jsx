import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import "./Asp3css.css"

function Aspart3() {
  return (
    <div><div style={{display:'flex',flexDirection:'row'}}><div style={{marginTop:100,marginLeft:100}}><h1 style={{color:'black'}}>Let's</h1 ><h1 style={{color:'red'}}>begin</h1>
    
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        
        <Form.Control type="text" placeholder="Full name "  />
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   
        <Form.Control type="email" placeholder="Email address" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   
   <Form.Control type="text" placeholder="Subject" />
 </Form.Group>
 

      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control as="textarea" rows={4} />
      </Form.Group>

    </Form>
     <Button variant="dark" className='dbtn' >SEND</Button>
    </div>

    <div><Card style={{ width: '18rem' ,marginLeft:400,marginTop:100}}>
      <Card.Body>
        <Card.Title>New business</Card.Title>
       
        <Card.Text>
        HELLO@COMPANY.COM
        </Card.Text>
        
      </Card.Body>
    </Card></div>

    <div><Card style={{ width: '18rem' ,marginLeft:10,marginTop:100}}>
      <Card.Body>
        <Card.Title>Main Studio</Card.Title>
        
        <Card.Text>
        STUDIO@COMPANY.COM
        </Card.Text>
        
      </Card.Body>
    </Card></div>

    
    
    </div>

    
    
    </div>
  )
}

export default Aspart3