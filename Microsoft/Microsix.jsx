import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Microsix() {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                <video controls style={{height:400,width:600}}> 
                <source src="https://s7d2.scene7.com/is/content/microsoftcorp/RE4XdUo_video_en-us" type=" video/mp4"></source>

                </video>
                </Col>
                <Col>
                <h2>
                Create and edit together
                </h2>
                <p>Share your documents with anyone and edit them together, adding comments and suggested changes in real time.1</p>
                </Col>
               
            </Row>
        </Container>
    </div>
  )
}

export default Microsix