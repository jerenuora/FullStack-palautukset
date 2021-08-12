import React, { useState, useEffect } from 'react'
import axios from '../../maiden-tiedot/node_modules/axios'
import ShowCountries from './components/ShowCountries'

const App = () => {
  const [ searchWord, setSearchWord ] = useState('')
  const [ countries, setCountries ] = useState([])

  const hook = () => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response =>{
      setCountries(response.data)
    })
  }

  useEffect(hook, [])

  const handleSearchWordChange = (event) => {
    setSearchWord(event.target.value)
  } 
  
  return(
    <div>
      <p>Find countries    
      </p>
      <input
      value={searchWord}
      onChange={handleSearchWordChange}/>
      <ShowCountries countries={countries} filterWord={searchWord} setSearchWord={setSearchWord}/>
    </div>
  )
}

export default App
