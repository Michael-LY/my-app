import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import LoginPanel from './pages/LoginPage'
import SignUp from './pages/SignInPage'

function AppRouter() {
    return (
        <BrowserRouter>
            <ul>
                <li><Link to='/pages/LoginPage'>登录</Link></li>
                <li><Link to='/pages/SignInPage'>注册</Link></li>
            </ul>
            <Route path='/pages/LoginPage' exact component={LoginPanel} />
            <Route path='/pages/SignInPage' exact component={SignUp} />
        </BrowserRouter>
    )
}

export default AppRouter