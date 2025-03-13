import React, { createContext, useState } from 'react';


export const UserContext = createContext();


export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    
    const login = (userData) => {
        setIsLoggedIn(true);
        setUser(userData);
    };

   
    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);
    };

    
    const value = {
        isLoggedIn,
        setUser,
        user,
        setIsLoggedIn,
        login,
        logout,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};