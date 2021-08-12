import React, { useEffect, useState } from 'react'
import personService from './services/persons'
import Notification from './components/Notification'
import AllPersons from './components/AllPersons'
import Filter from './components/Filter'
import PersonAdder from './components/PersonAdder'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterText, setFiltertext ] = useState('')
  const [ successMessage, setSuccessMessage ] = useState(null)

  useEffect(() => {
    personService
    .getPersons()
    .then(receivedPersons =>{
      setPersons(receivedPersons)
    })
  }, [])

  const addName = (event) =>{
    event.preventDefault()
    const isPresent = persons.map(names => names.name.toUpperCase()).indexOf(newName.toUpperCase())
    const nameObj = {
      name: newName,
      number:newNumber,
    } 

    if (isPresent === -1) {
      personService
        .addPerson(nameObj)
        .then(addedPerson => {
          setPersons(persons.concat(addedPerson))
          setSuccessMessage([true,`${addedPerson.name} added succesfully`])
          setTimeout(() => {
            setSuccessMessage(null)
            },4000)
        })
    }
    else {
      if (window.confirm(`${newName} is already in the phonebook, replace number with new? `)) {
        const personServiceProps = [persons[isPresent].id, nameObj]
        personService
          .updateNumber(personServiceProps) 
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson))
            setSuccessMessage([true,`${updatedPerson.name}'s number changed to ${updatedPerson.number}`])
            setTimeout(() => {
              setSuccessMessage(null)
              },4000)
          })
          .catch(() => {
            setSuccessMessage([false,`${nameObj.name} has been already deleted`])
            setTimeout(() => {
              setSuccessMessage(null)
              },4000)
            })
        }
      }
      setNewName('')
      setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChance = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFiltertext(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={filterText} handler={handleFilterChange}/>
      <h2>Add number</h2>
      <Notification msg={successMessage} /> 
      <PersonAdder addName={addName} newName={newName} 
      handleNameChange={handleNameChange} newNumber={newNumber} 
      handleNumberChance={handleNumberChance} />
      <h2>Numbers</h2>
      <div>
        <AllPersons 
        persons={persons} 
        filterText={filterText} 
        setPersons={setPersons} 
        setSuccessMessage={setSuccessMessage} />
      </div>
    </div>
  )
}

export default App
