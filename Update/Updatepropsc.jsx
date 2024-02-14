import React from 'react'
import{ Button } from 'react-bootstrap'
function Updatepropsc({val,val2}) {
    function sample(){
      val2("hi")  
    }

  return (
    <div><h1>{val}</h1>
{/* {val?<h2>This is first text</h2>:<h2>This is second text</h2>} */}

    <Button onClick={sample}>CHANGE</Button>
    </div>
  )
}

export default Updatepropsc



