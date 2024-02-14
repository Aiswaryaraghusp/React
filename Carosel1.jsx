import React from 'react'
import { Carousel } from 'react-bootstrap'
function Carosel1() {
  return (
    <div> <Carousel fade>
    <Carousel.Item>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUKhGqvVT54fi8V_IzqLeowAsde1dADHjuMYJrCqvqXw&s"/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7MREPRCPGSm2oG8ZaQgVVtCCFsCzMoWrFA&usqp=CAU" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7MREPRCPGSm2oG8ZaQgVVtCCFsCzMoWrFA&usqp=CAU'/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></div>
  )
}

export default Carosel1