import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Colorusestate1() {

    const [color, setfirst] = useState("black")


  return (
    <div>
    <h1>TEXT COLOR IS  {color}</h1>
        <button onClick={()=>setfirst("RED")}style={{backgroundColor:'red'}}>RED</button>
        <button onClick={()=>setfirst("YELLOW")} style={{backgroundColor:'Yellow'}}>yellow</button>
        <button onClick={()=>setfirst("GREEN")} style={{backgroundColor:'green'}}>GREEN</button>
        <button  onClick={()=>setfirst("BROWM")} style={{backgroundColor:'brown'}}>Brown</button>

    </div>
  )
}

export default Colorusestate1