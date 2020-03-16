import React, { useContext } from 'react';
import './App.css';

import LoginPanel from './pages/LoginPage'
import SignUp from './pages/SignInPage'

import { AuthProvider, AuthConext } from './context/authContext';

function App(){
    return (
        <AuthProvider>
            <Auth />
        </AuthProvider>
    )
}

function Auth () {
    const { authState } = useContext(AuthConext)
    return (
        authState.isLoggedIn ? (<div>登录成功</div>): <SignUp />
    )
}
export default App