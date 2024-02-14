import React from 'react'
import {  Button, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap"

function Header() {
  return (
    <div><header className='demonav'>

<Navbar expand="lg" className="c">
      <Container>
        <Navbar.Brand href="#home">       <Button  className="navbutton1" variant="warning"><b>IMDb</b></Button>
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Form.Select size="sm">
        <option>ALL</option>
      </Form.Select></Nav.Link>
            <Nav.Link href="#link"> <Form.Group controlId="formFileSm" className="mb-3">
        
 
      </Form.Group></Nav.Link>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        
        <Form.Control type="text" placeholder="Full name "  />
      </Form.Group>
      <Nav.Link href="#home"><b>IMDb Pro</b></Nav.Link>
      <Nav.Link href="#home"><b>Wtch list</b></Nav.Link>
      <Nav.Link href="#home"><b>Sign In</b></Nav.Link>
      <Nav.Link href="#home"><b> <Nav.Link href="#home"><Form.Select size="sm">
        <option>EN</option>
      </Form.Select></Nav.Link></b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
        
        
        </header></div>
  )
}

export default Header