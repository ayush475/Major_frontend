import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import ChatPage from './pages/ChatPage';
import SignupPage from './pages/SignUpPage';
import SigninPage from './pages/SigninPage';
import HomePage from './pages/HomePage';


const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/about" element={<AboutPage/>} />
                <Route exact path ="/chat" element={<ChatPage/>} />
                <Route exact path ="/signup" element={<SignupPage/>} />
                <Route exact path ="/signin" element={<SigninPage/>} />
                <Route exact path ="/home" element={<HomePage/>} />
               
                {/* Add more routes here */}
            </Routes>
        </Router>
    );
};

export default RoutesComponent;
 