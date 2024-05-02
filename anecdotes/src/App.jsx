import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  const toVote = () => {
    const newVotes = [...votes]
    newVotes[selected]++
    setVotes(newVotes)

  }

  const mostVoted = () => {
    let maxVotes = 0
    let position = 0

    for(let i = 0; i < anecdotes.length; i++) { // By default it shows the last anecdote
      if (votes[i] >= maxVotes) {
        position = i
        maxVotes = votes[i]
      }
    }

    return position
  }

  return (
    <div>
      <Header name="Anecdote of the day" />
      <Display anecdotes={anecdotes} votes={votes} selected={selected} />
      <Button text="next anecdote" handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} />
      <Button text="vote" handleClick={toVote} />

      <Header name="Anecdote with most votes" />
      <Display anecdotes={anecdotes} votes={votes} selected={mostVoted()} /> 
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Header = (props) => (
  <h1>{props.name}</h1>
)

const Display = (props) => {
  return (
    <>
      <p>{props.anecdotes[props.selected]}</p>
      <p>has {props.votes[props.selected]} votes</p>
    </>
  )
}

export default App
