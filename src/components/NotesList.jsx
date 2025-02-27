import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deleteNote} from "../redux/actions"

const NotesList = () => {


    const {notes}= useSelector(state=>state.notes)
    const dispatch= useDispatch();
  return (
    <div>
      {notes.map(note=>
      <div>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <button onClick ={()=>dispatch(deleteNote(note.id))}>Delete</button>
      </div>

      )}
    </div>
  )
}

export default NotesList
