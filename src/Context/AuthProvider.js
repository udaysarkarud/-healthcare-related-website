import React, { createContext } from 'react';
import useFirebase from '../hook/useFirebase'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allAuthData = useFirebase()
    return (
        <AuthContext.Provider value={allAuthData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;