// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt6gOMShChxSGToTvGHyDkVgyFIvgaIq8",
  authDomain: "evaluation-436f6.firebaseapp.com",
  databaseURL:"https://evaluation-436f6-default-rtdb.firebaseio.com/",
  projectId: "evaluation-436f6",
  storageBucket: "evaluation-436f6.firebasestorage.app",
  messagingSenderId: "896997955137",
  appId: "1:896997955137:web:2cd09cd7dfb678a29d98c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// const database = getDatabase(app)
export const database=getDatabase(app);
export const auth = getAuth(app);
export const provider= new GoogleAuthProvider();
// export default{app} 
// export default auth;
// export default database;
// export default provider;