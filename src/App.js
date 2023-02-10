import logo from './logo.svg';
import './App.css';
import { ReactDOM, Navigate } from 'react';

import Dashboard from './Views/Dashboard';
import SignIn from './Views/Sign-in';
import SignUp from './Views/Sign-up';


import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
