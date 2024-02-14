import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

function Ternoryopertorhide() {
   
 const [showText, setshowText] = useState(false)
const [buttonT, setbutton] = useState(false)
 
 const handclick=()=>{
  setshowText(!showText);
  setbutton(!buttonT)
 };
  
  return (
    <div>
        {showText ? <h1>This is the text to show.</h1> : ""}
        
   
        
        <Button onClick={handclick}>{buttonT?"Hide":"Show"} </Button ></div>
  )
}

export default Ternoryopertorhide