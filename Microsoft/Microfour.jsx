import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Microfourcss.css'

function Microfour() {
  return (
    <div>

     <Container>
        <Row>
            <Col>
            <video  className='v1' controls>
                <source src="https://s7d2.scene7.com/is/content/microsoftcorp/MS-GIFs-WordTrim-V2A" type="video/mp4"></source>
            </video>
            </Col>
            <Col>
            <h2>Uplevel your writing journey</h2>
<p>Copilot in Word will write, edit, summarize, give suggestions, and create right alongside you. Copilot will bring in information from across your organization to create first drafts, add content to existing documents, summarize text, and rewrite sections—or even entire documents—to make them more concise.</p>

Learn more
            </Col>
        </Row>

     </Container>

    </div>
  )
}

export default Microfour