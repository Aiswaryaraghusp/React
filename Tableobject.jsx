import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

function Tableobject() {

    const [first, setfirst] = useState([{name:"Thanu",phone:8086037835,address:"Calicut"}
    ,{name:"Ivani",phone:8086037835,address:"Calicut"},{name:"Devaprayag",phone:9400189614,address:"Calicut"}

])
  return (
  

   


    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>Phone</th>
          <th> Address</th>
        </tr>
      </thead>
      {first.map((display)=>

    
      <tbody>
        <tr>
          <td>1</td>
          <td>{display.name}</td>
          <td>{display.phone}</td>
          <td>{display.address}</td>
        </tr>
        </tbody>
         )}
         
    </Table>
    </div>
  ) 
}

export default Tableobject