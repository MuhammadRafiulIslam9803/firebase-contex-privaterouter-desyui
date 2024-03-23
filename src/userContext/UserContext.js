import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.init';

export const AuthContext = createContext()

const auth = getAuth(app)

const UserContext = ({children}) => {
  const [loding ,setloding] =useState(true)
    // state for user Todaroki
   const [user ,setUser] = useState({})

//    create user with email and password
   const createUser = (email ,password) =>{
        return createUserWithEmailAndPassword(auth ,email ,password)
  }
//   login user with email and password
  const logInUser = (email ,password )=>{
        return signInWithEmailAndPassword(auth ,email ,password)
  }
  const verifyEmail = () =>{
       return sendEmailVerification(auth.currentUser)
  }
  // update user profile 
  const updateUser = profile =>{
       return updateProfile(auth.currentUser ,profile)
  } 

//   logout user 
  const logOut = ()=>{
    signOut(auth).then(()=>{})
    .catch(error=>{console.error(error)})
  }

//   useEffect for todaroki user koi ace login ace ki nah ata janaar jonno 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth , currentUser =>{
      if(currentUser === null || currentUser.emailVerified){

        setUser(currentUser)
      }
        setloding(false)
    })
    return ()=>{
        unsubscribe()
    }
  },[])

// send by prpos or context all useable function and variable of state 
    const authInfo = {
      createUser ,
      logInUser ,
      updateUser ,
      setloding,
      verifyEmail,
      user ,
      logOut ,
      loding,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;