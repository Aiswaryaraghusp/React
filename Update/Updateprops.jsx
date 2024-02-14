import React, { useState } from 'react'
import Updatepropsc from './Updatepropsc'

function Updateprops() {
    const [first, setfirst] = useState("Hello")

  return (
    <div><Updatepropsc val={first} val2={setfirst}/></div>
  )
}

export default Updateprops