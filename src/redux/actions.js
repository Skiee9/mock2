import { signInWithPopup, signOut } from "firebase/auth"
// import { getAuth } from "firebase/auth"
// import {database} from "./firebase"
import {database, auth, proivder} from "../firebaseConfig"
// import { getDatabase, ref, set, get, child, update } from "firebase/database"
import {ref, push, update,remove,get} from "firebase/database"
// authentictaioin login and logout
export const loginUser =()=>async dispatch=>{
    try{
        const result = await signInWithPopup(auth, provider);
        dispatch ({type: "LOGIN_SUCCESS", payload:result.user});
        
    }catch(error){
        console.error("login failed",error);
    }
};
export const logoutUser=()=>async dispatch=>{
    await signOut(auth);
    dispatch({type: "LOGOUT_SUCCESS"});
}

// fetching the notes
export const fetchNotes = () => async dispatch => {
    const notesRef= ref(database, "notes");
    const snapshot= await get(notesRef);
    const notes= snapshot.val()
    ?
    Object.keys(snapshot.val()).map(id=>({id,...snapshot.val()[id]}))
    :[];
    dispatch({type:"FETCH_NOTES_SUCCESS", payload:notes});
}

// adding ntoe
export const addNote =(id, title, content)=>async dispatch =>{
    const newNoteRef =push(ref(database, "notes"));
    const newNote={title, content,timestamp:Date.now()};
    await update (newNoteRef , newNote);
    dispatch({type:"ADD_NOTE_SUCCESS", payload:{id: newNoteRef.key,...newNote}});
}

// update note
export const updateNote =(id, title, content)=>async dispatch =>{
    const noteRef = ref(database, `notes/${id}`);
    await update (noteRef, {title, content});
    dispatch({type:"UPDATE_NOTE_SUCCESS", payload:{id, title, content}});

}
// delete
export const deleteNote = id => async dispatch=>{
    await remove(ref(database,`notes/${id}`));
    dispatch ({type:"DELETE_NOTE_SUCCESS", payload:id})
}