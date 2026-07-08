import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const SignInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const updateUser = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData)
    }
    const SignInGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const signInGithub = () =>{
        setLoading(true)
        return signInWithPopup (auth, githubProvider)
    }
    const signOutUser = () =>{
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUsers(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    const userInfo = {
        users,
        loading,
        setLoading,
        setUsers,
        createUser,
        SignInUser,
        SignInGoogle,
        signInGithub,
        signOutUser,
        updateUser
    }
    return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;