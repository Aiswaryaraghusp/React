import React from 'react'
import { Badge, Col, Container, Form, Image, Nav, Navbar } from 'react-bootstrap'
import './Starbucks1.css'
import { Link } from 'react-router-dom'

function Starbucks() {
  return (
    <div>
        <header><Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><Col xs={6} md={4}>
          <Image src="https://www.starbucks.in/assets/icon/logo.png" roundedCircle />
        </Col></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Link to="/Gift"><Nav.Link href="#action2">Gift</Nav.Link></Link>
            <Nav.Link href="#action2">Order</Nav.Link>
            <Nav.Link href="#action2">Pay</Nav.Link>
            <Nav.Link href="#action2">Store</Nav.Link>
            
            
            
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Image src="https://www.starbucks.in/assets/icon/account_thin.svg
" roundedCircle />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
        <div className='c1' ><b style={{marginLeft:50,fontSize:20}}>A world of rewards awaits you!Sign up now</b>  < Badge   className='c2'pill bg="success">
        Know More
      </Badge>  </div>

          <h1>Handcrafted Curations</h1>

         <div className='cender'>
     
          <Image  style={{height:100,margin:30}} src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Bestseller.jpg" roundedCircle />
          <Image  style={{height:100,margin:50}} src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Drinks.jpg" roundedCircle  />

          <Image  style={{height:100,margin:50}} src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Food.jpg" roundedCircle  />

          <Image  style={{height:100,margin:50}} src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Merchandise.jpg" roundedCircle  />
          <Image  style={{height:100,margin:50}} src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/CoffeeAtHome.jpg" roundedCircle  />

          <Image  style={{height:100,margin:50}} src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/ReadyToEat.jpg" roundedCircle  />
          <b style={{margin:50}}>Bestseller</b>
            <b style={{margin:50}}>Drinks</b>
            <b style={{margin:110}}>Food</b>
            <b style={{margin:40}}>Merchandise</b>
            <b style={{margin:40}}>Coffee At Home</b>
            <b style={{margin:70}}>Ready to Eat</b>
          
        

          </div>
          
           

          





        </div>
  )
}

export default Starbucks