import React, { useState } from 'react'
import Tprpsc from './Tprpsc'

function Tprops1() {
    const [age, setage] = useState(60)
  return (
    <div><Tprpsc val={age}/></div>
  )
}

export default Tprops1