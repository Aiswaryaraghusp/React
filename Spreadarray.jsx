import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Spreadarray() {
   const [first, setfirst] = useState([{name:"car",color:"black"},{name:"bike",color:"green"},{name:"bus",color:"yellow"}])
   const [sec, setsec] = useState([{name:"TATA",color:"Balck"},{name:"BMW",color:"Blue"},{name:"Tavera",color:"white"}])
   const [third, setthird] = useState({name:"icecream",color:"Butterscotch"})
//    const [fourth, setfouth] = useState({name:"icecream",flavor:"Chocolate"},{name:"Bun",flavor:"graps"})



    const sample=()=>{

          setfirst([...first,...sec])
    }

    const sample2=()=> {
             setfirst([...first,third])
    }
   
  return (
    <div>

        <table>

            <tr><th>Name</th>
            <th>Color</th>
            </tr>
            {first.map((display) =>
            <tr><td>{display.name}</td>
            <td>{display.color}</td></tr>
            )
            
            }
           
           
          
        </table>
        <Button onClick={sample}>ADD</Button>
        <Button onClick={sample2}>ADD</Button>
    </div>
  )
}

export default Spreadarray