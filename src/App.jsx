import React, {useState} from 'react'
import { signInWithGoogle } from './firebaseAuth';

const App = () => {
  const [user, setUser]= useState(null);
  const handleLogin =async ()=>{
    const user = await signInWithGoogle();
    if (user) {
      setUser(user);
    }
    console.log(user);
  }
  return (
    <div>
      <h1>  fruebase </h1>
      {user ?(
       <div>
        <h2> welcome {user.name} </h2>
        <p>Email : {user.email}</p>
      <img src ={user.photoURL} alt=""/>
        <button>lgout</button>
       </div>
      ):
      <button onClick={handleLogin}>login with google</button>
      }
    </div>
  )
}

export default App

