import React from 'react'
import './Footercss.css'
import { TbBrandTiktok } from "react-icons/tb"
import { FaInstagramSquare } from "react-icons/fa"
import { AiFillTwitterCircle, AiOutlineFacebook } from "react-icons/ai"
import { RiYoutubeLine }  from "react-icons/ri"

function Footer() {
  return (
    <>
    <body>

      
      <footer className='footer1'>

     <button className='button1' varient="success" >Sign in for more access</button><br/>
     <TbBrandTiktok/>  <FaInstagramSquare/>  <AiFillTwitterCircle/> <RiYoutubeLine/> <AiOutlineFacebook/> <br/>




     
     <a>Get the IMDb App</a> &nbsp; &nbsp; <a>Help</a> &nbsp; &nbsp;   <a>Site Index</a>&nbsp; &nbsp;<a>IMDbPro</a>&nbsp; &nbsp; <a>Box Office Mojo</a>&nbsp; &nbsp;<a>IMDb Developer</a><br/>
     <a>Press Room</a> &nbsp; &nbsp; <a>Advertising</a> &nbsp; &nbsp;   <a>Jobs</a>&nbsp; &nbsp;<a>Conditions of Use</a>&nbsp; &nbsp; <a>Privacy Policy</a>&nbsp; &nbsp;<a>Your Ads Privacy Choices</a>
    <p>© 1990-2023 by IMDb.com, Inc.</p>
    
     </footer></body>
    </>
  )
}

export default Footer