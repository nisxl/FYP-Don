import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import useAxios from '../utils/useAxios'

const HomePage = () => {
  let [notes, setNotes] = useState([])
  let {authTokens, logoutUser} = useContext(AuthContext)


  let api = useAxios()
  // making the note request
  useEffect(() => {
    getNotes()
  }, [])

  //getting notes from the 8000 port
  let getNotes = async() => {
  let response = await api.get('/api/notes')


    if (response.status === 200){
      setNotes(response.data)
    }
  }
  return (
    <div>
        <p>
            You are logged into the HomePage
        </p>

        <ul>
          {notes.map(note => (
            <li key = {note.id}>{note.body}</li>
          ))}
        </ul>
    </div>
  )
}

export default HomePage