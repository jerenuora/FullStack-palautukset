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
      <Part pa={props.parts[0].name} ex={props.parts[0].exercises}/>
      <Part pa={props.parts[1].name} ex={props.parts[1].exercises}/>
      <Part pa={props.parts[2].name} ex={props.parts[2].exercises}/>
    </>
  )
}

const Total = (props) => {

  return (
    <>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises }</p>
    </>
  )
}

const Part = (props) => {
  return (
    <>      
      <p>{props.pa} {props.ex}</p>
    </>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name:'Using props to pass data',
        exercises:  7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App