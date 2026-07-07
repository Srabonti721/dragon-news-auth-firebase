import React, { createContext, useState } from 'react';
 export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [users, setUser] = useState({
        name:"sopna",
        email:"sop@na.com"
    })
    const userInfo = {
        users, 
        setUser
    }
    return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;