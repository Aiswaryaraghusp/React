import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Microthreecss.css'

function Microthree() {
  return (
    <div>
        <Container>
          <Row><Image className='t1' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Word_260px_RE3apv8?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=40&hei=40&qlt=100&fmt=png-alpha&fit=constrain"/></Row>
            <Row><h1 className='t2'>Get the most out of your documents</h1></Row>
            <Row>
                <Col>
                <h1>Copilot in Word</h1>
                <p>Transform writing with efficiency and creativity - create, comprehend, refine, and elevate your documents.</p>
                Learn what's possible with Copilot
                </Col>
                <Col>
                <Image className=" t3"src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/copilot_word_1920x1080?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1600&qlt=100&fmt=png-alpha&fit=constrain"/>
                </Col>
            </Row>

        </Container>

        
    </div>
  )
}

export default Microthree