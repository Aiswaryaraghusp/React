import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './Azureseventhcss.css'

function Azureseventh() {
  return (
    <div><div className='s1'>
      
      <h4>Azure global infrastructure</h4>
      Go beyond the limits of on-premises datacenters with more regions than any other provider.<br/>
      <Button>Explore the glob</Button>
    </div>

    <div className='s2'> 
    <div style={{color:'white'}}>

      <h4 style={{textAlign:'center'}}>Get more value from your cloud investments</h4>
      <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
         <image src="https://azure.microsoft.com/content/dam/microsoft/final/en-us/microsoft-product-and-services/azure/azure-brand/Building.svg"/>/>
         16%: average savings of direct infrastructure-related costs with Azure1.
        </Col>
        <Col md="auto"><image src="https://azure.microsoft.com/content/dam/microsoft/final/en-us/microsoft-product-and-services/azure/azure-brand/Data%20Histogram.svg"></image></Col>
        37%: average three-year cost savings when you run equivalent workloads on Azure2.
        <Col xs lg="2">
       <image src="https://azure.microsoft.com/content/dam/microsoft/final/en-us/microsoft-product-and-services/azure/azure-brand/Data%20Line.svg"></image>
       54%: potential total cost of ownership savings on Azure versus running on-premises3.
        </Col>
      </Row></Container>
    </div>
     </div>
      
      
      </div>
  )
}

export default Azureseventh