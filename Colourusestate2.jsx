import React, { useState } from 'react'

function Colourusestate2() {


    const [color, setfirst] = useState("Black")
  return (
    
    <div>
       <h1 style={{color:color}}>TEXT COLOR IS {color}</h1>

    <button style={{backgroundColor:'red'}}  onClick={()=>setfirst("red") }  > Red</button>
    <button  style={{backgroundColor:'green'}}  onClick={()=>setfirst("red") } >  Green</button>
    <button style={{backgroundColor:'pink'}}  onClick={()=>setfirst("red") } >  Pink</button>
    <button style={{backgroundColor:'blue'}}  onClick={()=>setfirst("red") } > Blue</button>

    </div>
  )
}

export default Colourusestate2