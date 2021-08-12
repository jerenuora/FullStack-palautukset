import React from 'react'

const Button = ({country,handleClick}) => {
    return (
      <>
        <button onClick={handleClick} name={country}> More info</button>
      </>
    )
  }
  
const OneCountry = ({ country,setSearchWord }) => {
  const handleClick = (event) => {
      setSearchWord(event.currentTarget.name)
  }

  return(
      <div>
          {country} <Button handleClick={handleClick} country={country}/> 
      </div>
  )
}
  
export default OneCountry