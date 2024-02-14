import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import './Azurefifthcss.css'
function Azurefifth() {

    const [first, setfirst] = useState([{image:"https://azure.microsoft.com/content/dam/microsoft/legacy/acom/images/NextSteps-Icon-01-Keyboards.png",heading:"Start building on Azure free",text:"Get free services and a USD 200 credit to explore Azure for up to 30 days.",btntext:"Try Azure for free"},
    {image:"https://azure.microsoft.com/content/dam/microsoft/legacy/acom/images/NextSteps-Icon-02-Person.png",heading:"Connect with a sales specialist",text:"Chat with or call a sales specialist for personalized guidance.",btntext:"Get in Touch"},
    {image:"https://azure.microsoft.com/content/dam/microsoft/legacy/acom/images/NextSteps-Icon-03-LearningApp.png",heading:"New to Azure? Learn at your own pace",text:"Learn cloud computing basics with self-paced modules on Microsoft Learn.",btntext:" Get Started"}])
  return (
    <div><div className='f1' >
      <h1 className='h1'>Take the next step</h1>
     
      {first.map((display)=>
       <div style={{display:'inline-block',margin:50,}} >
      <Card style={{ width: '24rem',borderRadius:10}} >
  <Card.Img variant="top" src={display.image}  style={{height:50,width:50}} />
  <Card.Body>
    <Card.Title>{display.heading}</Card.Title>
    <Card.Text>
      {display.text}
    </Card.Text>
    <Button variant="primary">>     

    </Button>{display.btntext}
  </Card.Body>
</Card>
   
    </div>
     )}
     </div>

     <div>
      
       <a href=''><li>1.IDC Business Value Executive Summary, sponsored by Microsoft Azure, The Business Value of Migrating and Modernizing to Microsoft Azure, IDC #US49665122, September 2022</li></a>
      <a href=''><li>2.Ibid.</li></a>
      <a href=''><li>3.Costs and Benefits of .NET Application Migration to the Cloud, GigaOm, 2022</li></a>
      


     </div>

</div>
  )
}

export default Azurefifth