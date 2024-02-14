import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Countingusestate() {

     const [first, setfirst] = useState(1)

     const sample=()=>{
        
       
        
        if(first <=  0)
        {
            alert("Number is below zero")
         
        }
        else{
            setfirst(first-1)
        }

        



     }

  return (
    <div><h1>The number is {first}</h1>
    <Button onClick={()=>setfirst(first+1)}>Count</Button>
    <Button onClick={sample }>Decrement</Button></div>
  )
}

export default Countingusestate