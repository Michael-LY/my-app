import React, { useContext } from 'react';
import './App.css';

import LoginPage from './pages/LoginPage'
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
        authState.isLoggedIn ? (<div>登录成功</div>): <LoginPage />
    )
}
export default App