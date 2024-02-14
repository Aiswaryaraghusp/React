import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Carousel, Image } from 'react-bootstrap'

function CardcaroselAPI() {
    const [first, setfirst] = useState([])


    useEffect(() => {
    
    axios.get("https://dummyjson.com/products").then((display)=>
    {
        setfirst(display.data.products)
    }
    )

        
    }, [])
    
  return (
    <div>
        {first.map((display)=>

<Card style={{ width: '18rem' }}>
<Carousel>
      <Carousel.Item>
        <Image src={display.images[0]} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={display.images[0]} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={display.images[0]} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{display.title}</Card.Title>
        <Card.Text>
         {display.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        )}
    </div>
  )
}

export default CardcaroselAPI