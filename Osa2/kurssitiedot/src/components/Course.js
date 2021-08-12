import React from 'react'

const Header = (props) => {
    return (
    <>
      <h1>{props.course.name}</h1>
    </>
    )
  }
  
  const Content = (props) => {
    return (
      <>
      {props.parts.map(parts => 
        <Part key={parts.id} pa={parts.name} ex={parts.exercises}/>
          )
      }
        
      </>
    )
  }
  
  const Total = ({parts}) => (
      <>
        <b>
          Total number of exercises {parts.map(i=>i.exercises).reduce(
            (acc, val) => acc + val,0)}  
          </b> 
      </>
    )
  
  
  const Part = (props) => {
    return (
      <>      
        <p>{props.pa} {props.ex}</p>
      </>
    )
  }
  const Course = ({courses}) => {
    return (
      <div>
        <Header course={courses} />
        <Content parts={courses.parts}/>
        <Total parts={courses.parts}/>
      </div>
    )
  }

export default Course