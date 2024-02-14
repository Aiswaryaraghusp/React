import React from 'react'
import { Button, Image, Nav } from 'react-bootstrap'
import './Seccss.css'
function Sec() {
  return (
    <div><div  className='one'><div className='two'><h1>Endless possibilities—<br/>from the edge to the cloud&nbsp;</h1>
    <div> Broaden your impact with global infrastructure, cutting-edge AI services, and the latest dev tools. Pay-as-you-go or try Azure free for up to 30 days. There’s no upfront commitment—cancel anytime.
</div>
    <div><Button variant="primary">Get started</Button>{' '}  <Button variant="outline-primary">Try Azura for free</Button>{' '}</div>
    </div></div>
    <div> <Nav
      
    >
      <Nav.Item>
        <Nav.Link href="/home">Featured new</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home">Solutions</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Products and Services</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Resources by role</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Customer stories</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Button variant="success">Success</Button>{' '}
      </Nav.Item>
    </Nav></div>
    
    </div>
  )
}



export default Sec