import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    // Initialize state from localStorage
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
        return storedIsLoggedIn ? JSON.parse(storedIsLoggedIn) : false;
    });
    const [tempUser,setTempUser]= useState(null);

    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    // Update localStorage when isLoggedIn or user changes
    useEffect(() => {
        localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    // Login function
    const login = (userData) => {
        setIsLoggedIn(true);
        setUser(userData);
    };

    // Logout function with optional callback
    const logout = (callback) => {
        setIsLoggedIn(false);
        setUser(null);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");

        // Execute the callback if provided
        if (callback && typeof callback === "function") {
            callback();
        }
    };

    // Provide the context value to children
    const value = {
        tempUser,
        setTempUser,
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