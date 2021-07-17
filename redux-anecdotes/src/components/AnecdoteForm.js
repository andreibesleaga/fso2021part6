import React from 'react'
//import { useDispatch } from 'react-redux'
//import anecdoteService from '../services/anecdotes'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const NewAnecdote = (props) => {
  //const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    props.createAnecdote(content)
    props.notify(`new anecdote '${content}'`,5)
  }

  return (
    <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
            <input name="anecdote" />
            <button type="submit">create</button>
        </form>
    </div>
  )
}


const mapDispatchToProps = {
  createAnecdote,
  notify,
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewAnecdote)


//export default NewAnecdote
