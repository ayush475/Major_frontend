import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';


const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
               
                {/* Add more routes here */}
            </Routes>
        </Router>
    );
};

export default RoutesComponent;
 