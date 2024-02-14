import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

function Microten() {
  return (
    <div>
        <div>
            <h1 style={{marginLeft:100}}>Learn more about Microsoft 365 apps and services</h1>
            <Container>
                <Row>
                    <Col>
                    <Image src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Word_0_RWOfdA?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=50&hei=50&qlt=100&fmt=png-alpha&fit=constrain"/>
                    Word
                  </Col>
                  <Col>
                  <Image src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Excel_0_RWOcvu?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=50&hei=50&qlt=100&fmt=png-alpha&fit=constrain"/>
                  Excel
                  </Col>
                  <Col>
                  <Image src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PowerPoint_0_RWOcvx?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=50&hei=50&qlt=100&fmt=png-alpha&fit=constrain"/>
                  PowerPoint
                  </Col>
                  <Col>
                  <Image src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/OneNote_1_RWOfdM?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=50&hei=50&qlt=100&fmt=png-alpha&fit=constrain"/>
                  OneNote
                  </Col>
                  <Col>
                  <Image src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Outlook_0_RWO6Ed?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=50&hei=50&qlt=100&fmt=png-alpha&fit=constrain"/>
                  Outlook
                  </Col>
                  <Col>
                  <Image src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Teams_0_RWOfdS?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=50&hei=50&qlt=100&fmt=png-alpha&fit=constrain"/>
                  Teams
                  </Col>
                  <Col>
                  <Image src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/OneDrive_0_RWOfdO?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=50&hei=50&qlt=100&fmt=png-alpha&fit=constrain"/>
                  OneDrive
                  </Col>
                  <Col>
                  <Image src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon-Editor-60x60-2x_RWO47y?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=50&hei=50&qlt=100&fmt=png-alpha&fit=constrain"/>
                  Microsoft Editor
                  </Col>

                </Row>
                <Row>
                    <h2>Get the Word mobile app</h2>
                    <Col>
                    <Image src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/apple_and_andrio_logo_RE4DSNF?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=80&hei=40&qlt=100&fit=constrain"/>
                  </Col>
                  
                </Row>
                <Row>
                    <Image style={{height:400,width:300,marginTop:100,marginLeft:500}} src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/qrcode_word_app-1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=200&hei=200&qlt=100&fit=constrain"/><br/>
                   
                </Row>
                Click here if you're having trouble with the QR code
            </Container>
        </div>

    </div>
  )
}

export default Microten