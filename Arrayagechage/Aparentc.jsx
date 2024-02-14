import React from 'react'
import { Button } from 'react-bootstrap'
import { First } from 'react-bootstrap/esm/PageItem'

function Aparentc({val,val2}) {
    function sample(){
       val2[0]={name:"a",age:"2"}
    }
  return (
    <div>
<table>
    {val.map((display)=>
    <tr>
<td>{display.name}</td>
<td>{display.age}</td>

    </tr>

    )}
</table>
<Button onClick={sample}></Button>

    </div>
  )
}

export default Aparentc