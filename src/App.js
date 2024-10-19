import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {NavComponent} from './components/NavComponent';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';

const App = () => {
    return (
        <Router>
            <NavComponent />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;