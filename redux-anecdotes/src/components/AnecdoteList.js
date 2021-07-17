import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'
import { hideNotify } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return(
    <div>
        <div>
            {anecdote.content}
        </div>
        <div>
            has {anecdote.votes} vote(s) &nbsp; 
            <button onClick={handleClick}> vote </button>
        </div>
    </div>
  )
}


const Anecdotes = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const Vote = (id) => {
    dispatch(voteAnecdote(id))
    dispatch(notify(`you voted '${id}'`,5))
  }
  
  return(
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={ () => Vote(anecdote.id) }
        />
      )}
    </div>
  )
}

export default Anecdotes