import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

function Ternoryoperatior() {
const [showText, setShowText] = useState(false);


  return (
    <div>
        { showText ? <h1>This is the text to show.</h1>:""}
        <Button onClick={()=>setShowText(! showText)}>Change</Button>
        
    </div>
  )
}

export default Ternoryoperatior