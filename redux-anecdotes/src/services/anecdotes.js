import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
    const object = { content:content, votes:0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const vote = async (id) => {
    const response = await axios.get(baseUrl + '/'+ id)
    const newContent = response.data.content
    const newId = response.data.id
    const newVotes = response.data.votes + 1

    const object = {content:newContent, votes:newVotes, id:newId}
    const responsePost = await axios.put(baseUrl + '/' + id, object)
    return responsePost.data
}

export default { getAll, createNew, vote }