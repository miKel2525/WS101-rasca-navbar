import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import rereLogo from './assets/rere.png';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import BackgroundMusic from './components/BackgroundMusic'; // Import BackgroundMusic
import './App.css';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <Router>
            <header className="navbar">
                <div className="logo">
                    <img src={rereLogo} alt="Logo" className="logo" />  
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isMenuOpen ? <span>&#10006;</span> : <span>&#9776;</span>}
                </div>
                <nav>
                    <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                    </ul>
                </nav>

                {/* Add Background Music Button inside the navbar */}
                <div className="music-button">
                    <BackgroundMusic />
                </div>
            </header>

            <RouteBasedTransition /> {/* Extracted the route transition logic into a separate component */}
        </Router>
    );
};

const RouteBasedTransition = () => {
    const location = useLocation(); // Hook to get the current location for animation

    return (
        <main className="content">
            <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </main>
    );
};

export default App;
