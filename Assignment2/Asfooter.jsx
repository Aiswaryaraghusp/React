import React from 'react'
import { TbBrandTiktok } from "react-icons/tb"
import { FaInstagramSquare } from "react-icons/fa"
import { AiFillTwitterCircle, AiOutlineFacebook } from "react-icons/ai"
import { RiYoutubeLine } from "react-icons/ri"

function Asfooter() {
  return (
    <div><footer style={{height:300,backgroundColor:'black',marginBottom:1}}>
        <div style={{display:'flex',flexDirection:'row'}}>
       <div style={{marginLeft:100,marginTop:5}}><h1 style={{color:'white'}}>Little Fashion</h1> 
       Copyright © 2022 Little Fashion<br/>
       Designed by Tooplate 
       </div>
       <div style={{marginLeft:200,marginTop:1}}><h1 style={{color:'white'}}>Sitemap</h1> 
       Story<br/>
       Privacy policy<br/>
       Contact<br/>
       
Products<br/>

FAQs<br/>


       </div>
<div style={{marginLeft:200}}><h1 style={{color:'white'}}>Social Media</h1>
<TbBrandTiktok/>  <FaInstagramSquare/>  <AiFillTwitterCircle/> <RiYoutubeLine/> <AiOutlineFacebook/></div>

       </div>

        </footer></div>
  )
}

export default Asfooter