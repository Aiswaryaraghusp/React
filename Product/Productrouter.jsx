import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Productdisplay from './Productdisplay'
import Productadd from './Productadd'
import Productupdate from './Productupdate'

function Productrouter() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Productdisplay/>}/>
            <Route path="/Addproduct" element={<Productadd/>}/> 
            <Route path="/Updateproduct" element={<Productupdate/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Productrouter