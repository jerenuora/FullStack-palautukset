import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({good, bad, neutral, sum}) => {
  return (   
    <>
      <h2>Stats</h2>
      <table>
        <StatisticsLine text='good'value={good} />
        <StatisticsLine text='neutral' value={neutral} />
        <StatisticsLine text='bad' value={bad} />
        <StatisticsLine text='all' value={sum} />
        <StatisticsLine text='average' value={(good-bad)/sum} />
        <StatisticsLine text='positive' value={good*100/sum} char='%' />
      </table>
    </>
  )
}

const StatisticsLine = (props) => {
  if (isNaN(props.value)){
    return (
      <tbody>
        <tr>
          <td>{props.text}</td> 
          <td>0{props.char}</td> 
        </tr>
      </tbody>
    )
  }
  return (
    <tbody>
      <tr>
        <td>{props.text}</td> 
        <td>{props.value}{props.char}</td> 
      </tr>
    </tbody>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const sum = good + neutral + bad
  if (sum === 0){
    return (
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text='Good'/>
        <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral'/>
        <Button handleClick={() => setBad(bad + 1)} text='Bad'/>
        <h2>Stats</h2>
        <p> No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='Good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='Bad'/>
      <Statistics good={good} bad={bad} neutral={neutral} sum={sum}/>
    </div>
    
  )
}

export default App
