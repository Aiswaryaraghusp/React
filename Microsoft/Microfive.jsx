import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Microfive() {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                <h2>Write like a pro</h2>
                <p>Check spelling, grammar, capitalization, and punctuation in all your Word documents with Microsoft Editor.</p>
               Learn more about Microsoft Editor
               
                </Col>
                <Col>
                <video controls style={{height:400,width:600}}>
                    <source src="https://s7d2.scene7.com/is/content/microsoftcorp/RE4WQww_video_en-us" type="video/mp4"></source>
                </video>
                </Col>
            
            </Row>
        </Container>
        

    </div>
  )
}

export default Microfive