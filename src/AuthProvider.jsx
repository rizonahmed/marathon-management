import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase.init';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const[isDark,setIsDark]=useState(true)

    const createUser = (email, password) => {
        setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser =(email, password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=> {
      const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoading(false)
      })

      return () => {
        unSubscribe();
      }

    } ,[])



    const authInfo = {
        loading,
        user,
        isDark,
        setIsDark,
      createUser,
      signInUser,
      googleSignIn,
      signOutUser

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;