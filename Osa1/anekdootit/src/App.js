import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const ArrInc = (selected, copy) => {
  copy[selected] += 1
  return (
    copy
  )
}
const Plurality = ({votes, text}) => {
  if (votes === 1){
    return(
      <div>
        Has {votes} {text}
      </div>
    )
  }
  return(
    <div>
      Has {votes} {text}s
    </div>
  )

}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(1))
  console.log(Math.floor(Math.random() * anecdotes.length))
  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <p></p>
      <Plurality votes={points[selected]} text='vote'/>
      <Button handleClick={()=>setSelected(Math.floor(Math.random() * anecdotes.length))} text='New anecdote'/>
      <Button handleClick={()=>setPoints(ArrInc(selected,[...points]))} text='Vote'/>
      <h2>Most voted anecdote</h2>
      {anecdotes[points.indexOf(Math.max(...points))]}
      <p></p>
      <Plurality votes={points[points.indexOf(Math.max(...points))]} text='point'/>
    </div>
  )
}

export default App
