import React from "react"
import DeleteButton from '../components/DeleteButton'

const OnePerson = ({ id,name,number, persons, setPersons, setSuccessMessage }) => (
    <div>
     <b>{name}: {number} 
     <DeleteButton
     name={name} 
     id={id} 
     persons={persons} 
     setPersons={setPersons} 
     setSuccessMessage={setSuccessMessage} /></b>
    </div>
  )

export default OnePerson