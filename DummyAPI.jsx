import React from 'react'
import axios from 'axios'

function DummyAPI() {
    axios.get('https://dummyjson.com/products').then((display)=>{
        console.log(display.data.products);
        })
  return (
    <div>
  
  


    </div>
  )
}

export default DummyAPI