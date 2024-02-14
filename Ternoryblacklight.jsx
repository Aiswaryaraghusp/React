import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Ternoryblacklight() {
    const [showText, setshowText] = useState(false)
    const [buttonText, setbuttonText] = useState(false)
    const [colortext, setcolortext] = useState(false)
    const [backgroundchange,setbackgroundchange] = useState(false)

    const handclick=()=>{
        setshowText(!showText);
        setbuttonText(!buttonText);
        setbackgroundchange(!backgroundchange);
        setcolortext(!colortext);


       }
       const bgstyle={
        backgroundColor:"white",
        color:"balck"

       }
       const bgstyle2={
        backgroundColor:"balck",
        color:"white"

       }
  return (
    <div style={backgroundchange?bgstyle:bgstyle2}>


        {showText?<h1>Light mode</h1>:<h1>Dark mode</h1>}
   
        
             {colortext?<Button variant='Light mode' onClick={handclick}>{buttonText?"Darkmode":"Lightmode"} </Button >:<Button variant='Dark mode' onClick={handclick}>{buttonText?"Darkmode":"Lightmode"} </Button >}</div>
        
   
  )
}

export default Ternoryblacklight