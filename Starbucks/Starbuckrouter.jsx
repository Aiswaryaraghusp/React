import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Starbucks4 from './Starbucks4'
import Starbucks5 from './Starbucks5'
import Starbucks from './Starbucks'
import Starbucks3 from './Starbucks3'
import Starbucksgift from './Starbucksgift'
import Starbucksfooter from './Starbucksfooter'

function Starbuckrouter() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
        
        <Route path='/' element={<><Starbucks/>
    <Starbucks3/>
    <Starbucks4/>
    <Starbucks5/>
    <Starbucksfooter/>  </>}/>
        <Route path='/Gift' element={<><Starbucksgift/><Starbucksfooter/></>  }/>
   
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default Starbuckrouter