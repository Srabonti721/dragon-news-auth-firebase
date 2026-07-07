import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null);
    

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
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
        createUser
    }
    return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;