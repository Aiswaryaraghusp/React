import React, { useContext } from 'react'
import { Newcontext } from '../App'
import { Button } from 'react-bootstrap';

function Table() {

    const [data,setdata] = useContext(Newcontext)
    console.log(data);
    function sample(){
        setdata(
        data[0]=[{Name:"siya",Place:"London",Qualification:"MBBS"},])
    }
  return (
    
    <div>
        {data.map((display)=>
        <table>
            <tr>
                <td>{display.Name}</td>
            </tr>
        </table>
        
        )}
        <button onClick={sample}>Click</button>
    </div>
   
  )
}

export default Table