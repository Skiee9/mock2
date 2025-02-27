import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
// import { useDispatch } from 'react-redux'

const NoteForm = () => {


    const [title, setTitle]= useState("")
    const [content, setContent] = useState("")
    const dispatch = useDispatch();


const handleSubmit = e=>{
    e.preventDefault();
    console.log(title, content);
    if(title && content){
        dispatch(addNotes(title, content));
        setTitle("");
        setContent("")
    }
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
        <textarea value ={content}  onChange ={(e)=> setContent(e.target.value)} placeholder="content"/>
        <button type="submit">ADD</button>
      </form>
    </div>
  )
}

export default NoteForm
