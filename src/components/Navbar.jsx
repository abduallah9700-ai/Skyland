import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar-container">
      <nav className="navbar container">
        <Link to="/" className="navbar-brand">
          <img 
            src="/logo.png" 
            alt="Skyland Express LLC Logo" 
            className="navbar-logo"
          />
          <span className="navbar-title font-headline-md text-primary">Skyland Express LLC</span>
        </Link>
        
        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link font-label-md ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/services" className={`nav-link font-label-md ${isActive('/services') ? 'active' : ''}`}>Services</Link>
          <Link to="/about" className={`nav-link font-label-md ${isActive('/about') ? 'active' : ''}`}>About</Link>
          <Link to="/contact" className={`nav-link font-label-md ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
        </div>

        <div className="navbar-actions">

          <a href="tel:920-530-5147" className="btn btn-primary">Call Now</a>
          <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
