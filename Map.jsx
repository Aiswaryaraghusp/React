import React, { useState } from 'react'

function Map() {

const [first, setfirst] = useState([{name:"Sanjay",place:"Trivandrum"},{name:"hari",place:"seoul"},{name:"Kangana",place:"Busan"}])


  return (
    <div>
       {/* {first.map((display)=>
       <>
       <h1>{display.name}</h1>
       <p>{display.place}</p>
       </> */}
       {/* )} */}
{first.map((display)=>{
    return(
        <h1>{display.name}</h1>
        )
}

)
}



    </div>
  )
}

export default Map