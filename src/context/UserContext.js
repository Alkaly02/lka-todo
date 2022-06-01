import React, { useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword 
} from "firebase/auth";
import { auth } from "../firebase-config";

export const UserContext = React.createContext();

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState('');
    const [loadinData, setLoadingData] = useState(true);

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            // here we go because we got user date
            setLoadingData(false)
        })

        return unSubscribe;
    }, [])

    const value = {
        currentUser,
        signup,
        login
    }

    return (
        <UserContext.Provider value={value}>
            { !loadinData && children}
        </UserContext.Provider>
    )
}

