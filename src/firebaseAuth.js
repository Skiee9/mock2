// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// import { GoogleAuthProvider } from "firebase/auth";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import app from "./firebaseConfig"

// // google 

// const googleProvider = new GoogleAuthProvider();

// // googel sign in
// export const signInWithGoogle= async ()=>{
//     try{
//         const result = await signInWithPopup(auth,googleProvider)
//         const user = result.user;
//         localStorage.setItem("user",JSON.stringify)
//         return user

//     }catch(error){
// console.log("sign-in error", error)
//     }
// }





// email and password
const auth = getAuth(app);
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });