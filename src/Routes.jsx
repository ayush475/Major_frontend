import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import ChatPage from './pages/ChatPage';


const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/about" element={<AboutPage/>} />
                <Route exact path ="/chat" element={<ChatPage/>} />
               
                {/* Add more routes here */}
            </Routes>
        </Router>
    );
};

export default RoutesComponent;
 