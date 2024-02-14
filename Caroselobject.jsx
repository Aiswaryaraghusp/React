import React from 'react'
import { useState } from 'react'
import { Carousel } from 'react-bootstrap'

function Caroselobject() {
  const [first, setfirst] = useState([{flower:"tulip",color:"Orange",image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSoIv5IyrmEPeNmSNYoqWSHFDhEiYOpdkHIvLerrq75fNu8gv4J"},

    {flower:"lavender",color:"violet",image:"https://c4.wallpaperflare.com/wallpaper/611/154/459/widescreen-high-resolution-nature-hd-1920x1080-wallpaper-thumb.jpg"},

        {flower:"rose",color:"red",image:"https://wallpapers.com/images/hd/wooden-cottage-sea-high-resolution-d7fahhz6phtkdveh.jpg"}

])


  return (
    <div> <Carousel>

        {first.map((display)=>        
        <Carousel.Item>
      <img src={display.image} text="First slide" />
      <Carousel.Caption>
        <h3>{display.flower}</h3>
        <p>{display.color}</p>
      </Carousel.Caption>
    </Carousel.Item>
    
  )}
  </Carousel>
  
  
  </div>


    
  )
}

export default Caroselobject