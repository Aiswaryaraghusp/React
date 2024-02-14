import React from 'react'
import { Carousel } from 'react-bootstrap'

function Body() {
  return (
    <div><div >
        

<Carousel fade className='caro'>
    <Carousel.Item>
      <img src="https://media.istockphoto.com/id/1729018319/photo/group-of-happy-hiker-jumping-on-the-hill.webp?b=1&s=170667a&w=0&k=20&c=RTNI-k2x_bleQJ6p_EGZ5HmxoTQ9YcfZXAypZ95mSJ8="/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://images.unsplash.com/photo-1695422078549-335effc4e98c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src='https://plus.unsplash.com/premium_photo-1669018128270-3c30322fbdbf?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D'/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></div></div>
  )
}

export default Body