import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

function Usenavigate1() {
     const history=useNavigate();
     const sample=()=>
     {
        history("/abc")
     }
  return (
    <div>
<Button onClick={sample}>Click</Button>

    </div>
  )
}

export default Usenavigate1