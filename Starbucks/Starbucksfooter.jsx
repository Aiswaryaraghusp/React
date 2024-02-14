import React from 'react'
import { Image } from 'react-bootstrap'
import { AiFillTwitterCircle, AiOutlineFacebook } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import './Sfooter.css'

function Starbucksfooter() {
  return (
    <div><footer className='footer'> <div className='d'>
        
        
        <div style={{margin:50}}>          <Image src="https://www.starbucks.in/assets/icon/logo.png" roundedCircle />
</div>
<div style={{margin:50}}><h3>About Us</h3>

<li>Coffeehouse</li>
<li>Our Company</li>
<li>Our Heritage</li>






</div>


<div style={{margin:50}}><h3>Responsibility</h3>

<li>Community
</li>
<li>Ethical Sourcing</li>
<li>Environment</li>
<li>Diversity</li>









</div>


<div style={{margin:50}}><h3>Quick Links</h3>
<li>Privacy Policy</li>
<li>Starbucks Rewards Day Offer</li>
<li>Delivery</li>
<li>Season's Gifting</li>
<li>Careers</li>
<li>Customer Service</li>
<li>FAQs</li>
<li>Offer for Beverage Subscription at Starbucks.</li>
<li>Terms and Conditions</li>





</div>


<div style={{margin:40}} ><h3>Social Media</h3>
  <FaInstagramSquare/> <AiOutlineFacebook/><AiFillTwitterCircle/> </div>

  </div>

  


  <hr style={{height:2,color:'white',alignContent:'center'}}></hr>

Web Accessiblity|  Privacy Statement|Terms of Use|Contact Us
        </footer></div>
  )
}

export default Starbucksfooter