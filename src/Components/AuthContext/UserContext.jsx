import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
 
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
        return storedIsLoggedIn ? JSON.parse(storedIsLoggedIn) : false;
    });

    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

   
    useEffect(() => {
        localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);


    const login = (userData) => {
        setIsLoggedIn(true);
        setUser(userData);
    };


    const logout = (callback) => {
        setIsLoggedIn(false);
        setUser(null);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");

 
        if (callback && typeof callback === "function") {
            callback();
        }
    };

    const value = {
        isLoggedIn,
        user,
        setIsLoggedIn,
        setUser,
        login,
        logout,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};