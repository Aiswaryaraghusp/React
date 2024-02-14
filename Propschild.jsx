import React from 'react'

function Propschild({val,v,arr}) {
  return (
    <div>
    <h1>{val}</h1>
    <h2>{v.age}</h2>

    {arr.map((display) =>
 <table>

    <tr>
<td>{display.name}</td>
<td>{display.age}</td>
</tr>
</table> 

    
            )  }
    </div>

  )
}

export default Propschild