import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DummyAPI2() {
    const [first, setfirst] = useState([])
    useEffect(() => {
      axios.get("https://dummyjson.com/products").then((display)=>{
     setfirst(display.data.products)
       
      console.log(display);
    })
     
    }, [])
    



  return (
    <div>

      {first.map((display)=>
<>
       <h1>{display.title}</h1>

       <h4>{display.description}</h4>
       </>
      )}
    </div>
  )
}

export default DummyAPI2