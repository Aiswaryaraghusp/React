import React, { useState } from 'react'
import search_icon from '../WeatherAPI/ss/search-icon.png'
import clearicon from '../WeatherAPI/ss/clear.png.png'
import cloudicon from '../WeatherAPI/ss/cloud.png'
import drizzleicon from '../WeatherAPI/ss/drizzle.png'
import rainicon from '../WeatherAPI/ss/rain.png'
import snowicon from '../WeatherAPI/ss/snow.png'

import wind_icon from '../WeatherAPI/ss/wind.png'
import humidity_icon from '../WeatherAPI/ss/humidity.png'

import './WeatherAPIcss.css'

export const WeatherAPI = () => {

   
        let api_key = "8925e014bb7aff2c5cdcb5274ab4c3ef";
        const [wicon, setwicon] = useState(cloudicon);
    const search  = async () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value===""){
           return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&unit=Metric&appid=${api_key}`;  
         
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate")
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = data.wind.speed + "km/hr";
        temperature[0].innerHTML = data.main.temp + "°C";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon==='01d' ||data.weather[0].icon==='01n' ){
           setwicon(clearicon);
        }
        else if(data.weather[0].icon==='02d' ||data.weather[0].icon==='02n' ){
           setwicon(cloudicon);
        }
        else if(data.weather[0].icon==='03d' ||data.weather[0].icon==='03n' ){
           setwicon(drizzleicon);
        }
        else if(data.weather[0].icon==='09d' ||data.weather[0].icon==='09n' ){
           setwicon(rainicon);
        }
        else if(data.weather[0].icon==='13d' ||data.weather[0].icon==='13n' ){
           setwicon(snowicon);
        }
        else{
           setwicon(cloudicon)
        }
   }

  return (
    <div className="container">
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder="Search"/>
            <div className="Search-icon">
                <img  className="search-icon" onClick={()=>{search()}} src={search_icon}/>
            </div>
            <div className="weather-image">
                <img src={cloudicon}/>
            </div>
            <div className="weather-temp">24C</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} className='icon'/>
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>

                <div className="element">
                    <img src={wind_icon} className='icon'/>
                    <div className="data">
                        <div className="humidity-percent">18km/h</div>
                        <div className="text">Wind speed</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
