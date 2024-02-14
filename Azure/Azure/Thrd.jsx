import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function Thrd() {
  const [first, setfirst] = useState([{headind:"Microsoft Ignite",description:"Explore the latest Azure innovations, learn from experts, level up your skillset, and expand your network."
,image:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/FeaturedNews-Card1-2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=624&hei=266&qlt=94&fit=constrain",btntext:"Learn more"},

{headind:"Discover the latest AI innovations",description:"Deliver intelligent solutions and differentiate your business with cutting-edge AI—explore the latest AI tools and features from Azure."
,image:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/FeaturedNews-Card2-2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=624&hei=268&qlt=95&fit=constrain",btntext:"See the latest announcement"},
{headind:"Optimize operations in the cloudsz",description:"Seamlessly migrate your mission-critical workloads and deliver cloud agility anywhere with the newest infrastructure capabilities."
,image:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/FeaturedNews-Card3-2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=833&hei=358&qlt=85&fit=constrain",btntext:"Reload the blog"}])
  return (
    <div>
      <p>FEATURED NEWS</p>
      <h3>Discover what’s happening on Azure</h3>
       {first.map((display)=>
      <div style={{display:'inline-block',margin:50}}>
     
      <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={display.image} />
      <Card.Body>
        <Card.Title>{display.headind}</Card.Title>
        <Card.Text>
          {display.description}
        </Card.Text>
        <Button variant="primary">></Button>{display.btntext}
      </Card.Body>
    </Card>
     
      </div>
       )}
      </div>
  )
}

export default Thrd