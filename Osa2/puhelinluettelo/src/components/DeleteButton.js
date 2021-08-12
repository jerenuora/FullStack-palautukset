import React from 'react'
import personService from '../services/persons'


const DeleteButton = ({ id, name, persons, setPersons, setSuccessMessage })  => {
    const deleteHandler = () => {
        if (window.confirm(`Remove ${name}? `)) {
        personService
            .deleteNumber(id)
            .then(() =>{
            setPersons(persons.filter(person => person.id !== id))
            setSuccessMessage([true, `${persons.filter(person => person.id === id)[0].name} removed`])
            setTimeout(() => { 
              setSuccessMessage(null)
              },4000)
            })
            .catch(() => {                                                    // Lisäsin tänne tämän saman toiminnallisuuden kuin tehtävässä 2.20,  
              setSuccessMessage([false,`${name} has been already deleted`])  // koska sain saman virheen klikkaillessani nopeasti deleteä
              setTimeout(() => { 
                setSuccessMessage(null)
                },4000)
              })
            }  
    }
    return(
    <div>
        <button onClick={deleteHandler}>delete</button>
    </div>
    )
}
  
export default DeleteButton