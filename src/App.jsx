import React, {useState} from 'react'
// import { signInWithGoogle } from './firebaseAuth';
import NoteForm from './components/NoteForm';
import { useDispatch, useSelector } from 'react-redux';
import NotesList from './components/NotesList';
import { loginUser, logoutUser } from './redux/actions';
   
// import { useNavigate } from 'react-router-dom';
const App = () => {
const user = useSelector(state=>state.auth.user);
const dispatch = useDispatch();


  // const [user, setUser]= useState(null);
  // const handleLogin =async ()=>{
  //   const user = await signInWithGoogle();
  //   if (user) {
  //     setUser(user);
  //   }
  //   console.log(user);
  // }
  return (
    <div>
      <nav>
      <h1> COLLABRATIVE NOTES </h1>
      </nav>
      
      <h4>Login</h4>
      <div>
      {user ?(
        <>
          <button onClick={()=>dispatch(logoutUser())}>Logout</button>
          <NoteForm />
          <NotesList/>
        </>
      ):(
<button onClick ={()=>dispatch(loginUser())} >
  Login with Google
</button>
      )}
      </div>
    </div>
  )
}

export default App

