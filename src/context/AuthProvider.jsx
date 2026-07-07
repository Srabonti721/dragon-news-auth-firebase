import { createUserWithEmailAndPassword, deleteUser, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null);
    

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const SignInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)

    }
    const SignInGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const signOutUser = () =>{
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUsers(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    const userInfo = {
        users,
        setUsers,
        createUser,
        SignInUser,
        SignInGoogle,
        signOutUser,
    }
    return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;