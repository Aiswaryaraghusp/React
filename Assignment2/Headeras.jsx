import React from 'react'
import { Nav } from 'react-bootstrap'

function Headeras() {
  return (
    <div> <header>
    <Nav  className='a'>
        <h1>Little Fashion</h1>
            <Nav.Item>
            <Nav.Link href="/home">Little Fashion</Nav.Link>
          </Nav.Item>

         
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Story</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Product</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">FAQ</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Contact</Nav.Link>
          </Nav.Item>
         
         
        </Nav>
        
        
        
        </header></div>
  )
}

export default Headeras