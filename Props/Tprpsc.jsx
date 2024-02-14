import React from 'react'

function Tprpsc({val}) {
    if(val<=18){
        console.log("Not eligible");

    }
    else{
        console.log("Eligible")
    }

  return (

    <div>
      
      {val<18?<h1>" Not Eligible"</h1>:<h1>"  Eligible"</h1>}
        </div>
  )
}

export default Tprpsc