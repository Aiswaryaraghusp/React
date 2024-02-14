import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function Starbucks3() {
  const [first, setfirst] = useState([{image:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/104114.webp",title:"Pumpkin spice latte",
text:" Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg an ",price:"₹ 414",btntext:"Add item"}
,{image:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/102257.webp",title:"Iced Pumpkin Spice Latte",
text:" Our signature espresso and milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg and clove   ",price:"₹ 456.75",btntext:"Add item"}

,{image:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/102257.webp",title:"Pumpkin Spice Cream Cold Brew ",
text:"       Our signature espresso and milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg and clove ",price:"₹ 456.75",btntext:"Add item"}])
  return (
    
    <div>{first.map((display)=>
    <div style={{display:'inline-block',margin:50,justifyContent:'center'}}>
     <Card style={{ width: '18rem'}}>
    <Card.Img variant="top" src={display.image} />
    <Card.Body>
      <Card.Title>{display.title} </Card.Title>
      <Card.Text>
        {display.text}
      </Card.Text>
      <div>
        <b>{display.price}</b>
      <Button  style={{ marginleft:400}}variant="success">{display.btntext}</Button></div>
    </Card.Body>
  </Card>
  
  

  


  </div>)}</div>
 
  
  )
}

export default Starbucks3