/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useState} from 'react';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import SignIn from '../Views/Sign-in';
import SignUp from '../Views/Sign-up';

export const AuthContext = React.createContext();

export default ({children}) => {
    const prevAuth = window.localStorage.getItem('authenticated') || false;

    const [authenticated, setAuthenticated] = useState(prevAuth);

    const clearStorage = () => {
        setAuthenticated(false);
        window.localStorage.clear();
    };

    useEffect(() => {
        if (authenticated) {
            console.log(authenticated);
            window.localStorage.setItem('authenticated', authenticated);
            <Navigate to='/' />;
        } else {
            window.localStorage.removeItem('authenticated');
        }
    }, [authenticated]);

    const defaultContext = {
        clearStorage,
        authenticated,
        setAuthenticated,
    };

    return (
        <AuthContext.Provider value={defaultContext}>
            {authenticated ? (
                children
            ) : (
                <div>
                    <BrowserRouter>
                        <Routes>
                            <Route exact path='/'>
                                <Route
                                    path='/'
                                    element={<Navigate to='/Sign-in' />}
                                />
                            </Route>

                            <Route path='Sign-in' element={<SignIn />} />
                            <Route path='Sign-up' element={<SignUp />} />

                            <Route path='*' element={<SignIn />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            )}
        </AuthContext.Provider>
    );
};
