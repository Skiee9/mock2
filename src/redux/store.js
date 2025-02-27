// import {combineReducers, createStore , applyMiddleware} from "redux";
import {configureStore} from "@reduxjs/toolkit"
import { thunk } from "redux-thunk"; 
// import thunk from "redux-thunk"
// import thunkMiddleware from "redux-thunk";
import notesReducer from "./notesReducer"
import authReducer from "./authReducer"


const store =configureStore({
reducer:{
        notes:notesReducer,
        auth:authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

// const store = createStore(rootReducer, applyMiddleware(thunk))
export default store;