import React, { useState } from 'react'
import Aparentc from './Aparentc'

function Aparent() {
    const [first, setfirst] = useState([{name:"a",age:1},{name:"b",age:2},{name:"c",age:3}])
  return (
    <div><Aparentc val={first} val2={setfirst}/></div>
  )
}

export default Aparent