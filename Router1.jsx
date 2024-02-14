import React from 'react'
import Spreadarray from './Spreadarray'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sample1 from './Sample1'

import Tableobject from './Tableobject'
import Propsparent from './Propsparent'
import Sample4  from './Sample4'
import Usenavigate1 from './Usenavigate1'
import Navigatio1 from './Navigatio1'
import Microtwo from './Microsoft/Microtwo'
import Microthree from './Microsoft/Microthree'
import Microfour from './Microsoft/Microfour'
import Microfive from './Microsoft/Microfive'
import Microsix from './Microsoft/Microsix'
import Micrseven from './Microsoft/Micrseven'
import Microten from './Microsoft/Microten'
import Microeleven from './Microsoft/Microeleven'
import Microthirteen from './Microsoft/Microthirteen'
import Microone from './Microsoft/Microone'
import Microfourteen from './Microsoft/microfourteen'





function Router1() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
<Route path='/' element={<><Microone/>
 <Microtwo/>
 <Microthree/>
 <Microfour/>
 <Microfive/>
 <Microsix/>
 <Micrseven/>
 <Microten/>
 <Microeleven/>
 <Microthirteen/>
 <Microfourteen/>
</>}/>
<Route path='/Navigation' element={<Navigatio1/>}/>
<Route path='/Search' element={<Spreadarray/>}/>
<Route path='/DEMO' element={<Tableobject/>}/>
<Route path='/abc' element={<Sample4/>}/>



        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default Router1