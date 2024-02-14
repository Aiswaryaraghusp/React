import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

function Useeffect1() {
    const [first, setfirst] = useState("Nice")

    useEffect(() => {

      alert("Hellooo")
    }, [first])
    
  return (
    <div>

<h1>{first}</h1>
<Button onClick={()=>setfirst("Hope")}>Change</Button>

    </div>
  )
}

export default Useeffect1