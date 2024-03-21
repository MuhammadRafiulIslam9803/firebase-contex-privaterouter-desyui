import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase.init';

export const AuthContext = createContext()

const auth = getAuth(app)

const UserContext = ({children}) => {
    // state for user Todaroki
   const [user ,setUser] = useState('')

//    create user with email and password
   const createUser = (email ,password) =>{
        return createUserWithEmailAndPassword(auth ,email ,password)
  }
//   login user with email and password
  const logInUser = (email ,password )=>{
        return signInWithEmailAndPassword(auth ,email ,password)
  }

//   logout user 
  const logOut = ()=>{
    signOut(auth).then(()=>{})
    .catch(error=>{console.error(error)})
  }

//   useEffect for todaroki user koi ace login ace ki nah ata janaar jonno 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth , currentUser =>{
        setUser(currentUser)
    })
    return ()=>{
        unsubscribe()
    }
  },[])

// send by prpos or context all useable function and variable of state 
    const authInfo = {createUser ,logInUser ,user ,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;