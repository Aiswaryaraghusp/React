import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

function Micrseven() {
  return (
    <div>
        <Container>
            <Row>
                <Col>
        <h2>Access your documents anywhere</h2>
        <p>Save your documents to OneDrive and access them from any device knowing your files are protected against digital attacks with built-in ransomware detection.</p>
        </Col>
        <Col>
        <Image style={{height:400,width:600}} src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/KeyMessage-Secure-Desktop-2x_RE4XdUq?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fit=constrain"/>
        </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Micrseven