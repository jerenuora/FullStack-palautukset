import React from "react"
import OneCountrySpecifics from './OneCountrySpecifics'
import OneCountry from './OneCountry'

const ShowCountries = ({ countries,filterWord,setSearchWord }) => {
    const strippedWord = filterWord.replace(/[\])}[{(]/g,'')
  
    const textToTest = new RegExp(strippedWord.toUpperCase())
    const countriesToShow = countries.filter(name => textToTest.test(name.name.toUpperCase().replace(/[\])}[{(]/g,'')) === true)
      
    if (countriesToShow.length < 11 && countriesToShow.length > 1 )
      return (
        <b>
          {countriesToShow.map(country => <OneCountry key={country.alpha2Code} country={country.name} setSearchWord={setSearchWord}/>)} 
        </b>
      )
    else if (countriesToShow.length === 1)
        return (
          <div>
          <OneCountrySpecifics country={countriesToShow[0]}/>
          </div>
        )
    else if (countriesToShow.length < 1)
          return(
            <div>
              No countries found 
            </div>
          )
    else 
        return(
          <div>
            Too many countries to show, please specify 
          </div>
        )
  }

export default ShowCountries