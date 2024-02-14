import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Usestate1() {



   const [first, setfirst] = useState("World")

// const sample=()=>{

//     setfirst("Universe")
// }

  return (
    <div><h1>Hello {first}</h1>
    <Button onClick={()=>setfirst("Universe")}>Change</Button>
    </div>
  )
}

export default Usestate1