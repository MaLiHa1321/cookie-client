import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import useAxiosSecure from '../hooks/useAxiosSecure';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader,setLoader] = useState(true)
    const axiosSecure = useAxiosSecure();

    // create user
    const createUser = (email,password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login user
    const loginUser = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // current user
     useEffect(()=>{
        const unsubscribe =
        onAuthStateChanged(auth, current =>{
            setUser(current)
            setLoader(false)

          const userEmail = current?.email || user?.email
          const loggUser = {email: userEmail}
          if(current){
            const url = '/jwt'
            axiosSecure.post(url, loggUser)
            .then(res => console.log(res.data))
          }
          else{
            const url = '/logout';
            axiosSecure.post(url, loggUser)
            .then(res => console.log(res.data))
          }
           
        })
        return () =>{
            return unsubscribe;
        }
     },[])

    //  logout 
    const logOut = () =>{
        setLoader(true)
        return signOut(auth)
    }


    const userInfo ={
        user,
        loader,
        createUser,
        loginUser,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;