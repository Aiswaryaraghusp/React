import React from 'react'
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { CiUser } from 'react-icons/ci';
import { VscSearch } from "react-icons/vsc";
function Microone() {
  return (
    <div>
      
      <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
    <Nav.Link href="">      <image src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"/>
</Nav.Link>
      <Navbar.Brand href="#home">Microsoft 365</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <NavDropdown title="Products" id="basic-nav-dropdown"></NavDropdown>
          <Nav.Link href="">Plans and pricing</Nav.Link>
          <NavDropdown title="Resources" id="basic-nav-dropdown"></NavDropdown>
          <NavDropdown title="Support" id="basic-nav-dropdown"></NavDropdown>
          
          
          <NavDropdown style={{marginLeft:400}} title="All microsoft" id="basic-nav-dropdown"></NavDropdown>
          <Nav.Link href="">Search<VscSearch /></Nav.Link>
          <Nav.Link href="">Sign in<CiUser /></Nav.Link>
         </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Microone