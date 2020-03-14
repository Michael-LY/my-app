import React, { createContext, useState } from 'react'
import axios from 'axios'

const AuthConext = createContext()

const iniState = {
    isLoggedIn: false,
    lastLoggedIn: Date,
    errorUser: false,
    errorPassword: false
}

function AuthProvider(props) {
    const [ authState, setAuthState ] = useState(iniState)

    function LoginRequest(username, password){
        axios.get({url: `https://easy-mock.com/mock/5e6a3a8bfae5d12c5d605333/ReactDemo01/AuthRequest`})
            .then(res => {
                if (res.data.username === username && res.data.password === password){
                    setAuthState({isLoggedIn: true})
                }
            })
    }

    return (
        <AuthConext.Provider value={{authState, LoginRequest}}>
            {props.children}
        </AuthConext.Provider>
    )
}

export {AuthConext, AuthProvider}