import React, { useState } from 'react'
import Cchild from './Cchild'

function Cparent() {
    const [fruit, setfruit] = useState([{name:"Graps",color:"purple",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2snW6QCCVSZClYAPLWLigJMXwGGqUj9dZ5A&usqp=CAU"},{name:"Apple",color:"Red",image:"https://images.everydayhealth.com/images/apples-101-about-1440x810.jpg?sfvrsn=f86f2644_1"}])
    const [vegetable, setvegetable] = useState([{name:"Carrot",color:'orange',image:"https://extension.usu.edu/nutrition/images/carrot-head.png"},{name:"brocolly",color:'Green',image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/d/s/k/325-brocoli-hyvrid-vegetable-seeds-b927-kanaya-original-imagggrbbrqmn7zf.jpeg?q=90"}])
    return (
    <div><Cchild val1={fruit} val2={setfruit} val3={vegetable} val4={setvegetable}/></div>
  )
}

export default Cparent