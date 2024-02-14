import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Spreadchange() {
    const [showText, setshowText] = useState({name:"Audi",color:"blue"},)
   const sample=() =>{
    setshowText({...showText,color:"white"})
   }

  return (

    <div><h>My car is {showText.name},White in {showText.color}</h>
    <Button onClick={sample}>Change</Button>
    </div>
  )
}

export default Spreadchange