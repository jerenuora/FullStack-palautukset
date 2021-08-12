import React, { useState, useEffect } from 'react'
import axios from 'axios'

const OneCountrySpecifics = ({ country }) => {
    const [weather, setWeather] = useState([])
    const api_key = process.env.REACT_APP_API_KEY
  
  
    const weatherhook = () => {
      axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
      .then(response=>{
        setWeather(response.data)
      })
    }
    useEffect(weatherhook,[country,api_key])
    
    if (country.capital !== '' && weather.length !== 0 )
      return (
        <div>
          <h2>{country.name}</h2>
          <div>
            <p>capital: {country.capital}</p> 
            <p>population: {country.population}</p>
          </div>
          <h3>Languages</h3>
          <ul>
            {country.languages.map(lgs => <li key={lgs.name}>{lgs.name}</li>)}
          </ul>
          <img src={country.flag} alt='Flag of the country' width='100'/>
          <h2>Weather in {country.capital}</h2>
          <h3>{weather.current.weather_descriptions[0]}</h3>
          <p><b>temperature:</b> {weather.current.temperature} C</p>
          <img src={weather.current.weather_icons[0]} alt='Weather symbol' width='50'/>
          <p><b>wind:</b> {weather.current.wind_speed} mph, direction: {weather.current.wind_dir}</p>
        </div>
    )
  
      return (
        <div>
          <h2>{country.name}</h2>
          <div>
            <p>capital: {country.capital}</p> 
            <p>population: {country.population}</p>
          </div>
          <h3>Languages</h3>
          <ul>
            {country.languages.map(lgs => <li key={lgs.name}>{lgs.name}</li>)}
          </ul>
          <img src={country.flag} alt='Flag of the country' width='100'/>
          <h2>Weather in {country.capital}</h2>
          <p>Loading weather</p>
          </div>
      ) 
  }
  
export default OneCountrySpecifics