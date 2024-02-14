import React, { useState } from 'react'
import Propschild from './Propschild'

function Propsparent() {
 const [simple, setsimple] = useState("Hello")
 const [sample, setsample] = useState({name:"ak",age:12})
 const [arry, setarry] = useState([{name:"diya",age:'20'},{name:"raman",age:'51'},{name:"karthi",age:'23'}])

  return (
    <div>
        <Propschild val={simple} v={sample} arr={arry}/>
        
        </div>
  )
}

export default Propsparent