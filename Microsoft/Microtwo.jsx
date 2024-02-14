import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import './Microtwocss.css'


function Microtwo() {
  return (
    <div> 

<Container><div className='n1'>
    <Row>
      <Col><p>Build your brand with ease. Exclusive holiday offer: 15% off Microsoft 365 Business Standard. Terms and conditions apply.*Buy now</p> </Col>
    </Row>
    </div>
   
   <Row>
    <div className="two">
      <Col>
<div className="three" >
 <h1>Microsoft Word</h1>
            <p style={{color:'white'}}>Make your words shine with smart writing assistance, helpful document designs,<br/> and easy collaboration tools anywhere, anytime.</p>
            <Button style={{color:'black',backgroundColor:'white'}}>Sign up for free</Button>
            <Button style={{borderColor:'white',color:'white'}}>Sign in</Button>
            
            <p>See plans and pricing</p>
           
             </div></Col><Col>
    
    <div>       <Image className="four" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/145420_Word_AppPageRedesign_Hero_960x600_2x_RE4XdUm?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=98&fmt=png-alpha&fit=constrain" />
</div>

</Col>
    </div></Row></Container>

    



    </div>
  )
}

export default Microtwo