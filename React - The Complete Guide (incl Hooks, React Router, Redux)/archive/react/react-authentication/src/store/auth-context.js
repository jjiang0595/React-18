import React, {useCallback, useEffect, useState} from "react";

let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {
    }
})

const calculateRemainingTime = (expirationTime) => expirationTime - Date.now()

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const loginHandler = (token, expirationTime) => {
        setToken(token)
        localStorage.setItem('token', token)
        localStorage.setItem('expirationTime', expirationTime)
        logoutTimer = setTimeout(logoutHandler, expirationTime - Date.now())
        setToken(token)
    }
    const logoutHandler = useCallback(() => {
        setToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        clearTimeout(logoutTimer)
    }, [])

    useEffect(() => {
        if (token) {
            let remainingTime = localStorage.getItem('expirationTime') - Date.now()
            if (remainingTime < 6000) remainingTime = 0;
            logoutTimer = setTimeout(logoutHandler, remainingTime)
        }
    }, [token, logoutHandler])

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext
