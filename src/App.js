import logo from './logo.svg';
import './App.css';
import {ReactDOM, Navigate} from 'react';

import Dashboard from './Views/Dashboard';
import SignIn from './Views/Sign-in';
import SignUp from './Views/Sign-up';

import AuthProvider from './layout/AuthProvider';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter basename='/'>
                <Routes>
                    <Route path='/' element={<Dashboard />} />

                    <Route path='sign-in' element={<SignIn />} />
                    <Route path='sign-up' element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
