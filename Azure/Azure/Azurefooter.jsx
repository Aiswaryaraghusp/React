import React, { useState } from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiMicrosoftazure } from "react-icons/si";
import './Azfooter.css'
import { Col, Container, Row } from 'react-bootstrap';
function Azurefooter() {
  
  return (
    <div>
    
Explore Azure
<div className='sec'><SiMicrosoftazure /> Get the mobile app</div><div><FaInstagram /></div><div><FaLinkedin /></div>

<Container>
      <Row >

      <Col xs lg="2">


<div><p><b>Explore Azure</b></p>
<li>What is Azure?</li>
<li>Get started</li>
<li>Global infrastructure</li>
<li>Datacentre regions</li>
<li>Trust your cloud</li>
<li>Customer enablement</li>
<li>Customer stories</li>
</div></Col>
<Col xs lg="2">
<div><p><b>Products and pricing</b></p>
<li>Products</li>
<li>Pricing</li>
<li>Free Azure services</li>
<li>Flexible purchase options</li>
<li>Cloud economics</li>
<li>Optimise your costs</li>

</div>
</Col>
<Col>
<div><p><b>Solutions and support</b></p>
<li>Solutions</li>
<li>Resources for accelerating growth</li>
<li>Solution architectures</li>
<li>Support</li>
<li>Azure demo and live Q&A</li>

</div></Col>
<Col>

<div><p><b>Partners</b></p>
<li>Azure Marketplace</li>
<li>Find a partner</li>
<li>Technology partners</li>
</div></Col>
<Col>
<div><p><b>Resources</b></p>
<li>Training and certifications?</li>
<li>Documentation</li>
<li>Blog</li>
<li>Developer resources</li>
<li>Students</li>
<li>Events and webinars</li>
<li>Analyst reports, white papers and e-books</li>
<li>Videos</li>
</div></Col>
<Col>
<div><p><b>Cloud computing</b></p>
<li>What is cloud computing?</li>
<li>What is cloud migration?</li>
<li>What is a hybrid cloud?</li>
<li>What is AI?</li>
<li>What is IaaS?</li>
<li>What is SaaS?</li>
<li>What is PaaS?</li>
<li>What is DevOps?</li>
</div></Col>
</Row>
</Container>

</div>


   
  )
}

export default Azurefooter