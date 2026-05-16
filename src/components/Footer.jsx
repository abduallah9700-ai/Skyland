import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container grid md:grid-cols-4 gap-lg footer-content">
        <div className="footer-brand md:col-span-1">
          <img 
            src="/logo.png" 
            alt="Skyland Express LLC Logo" 
            className="footer-logo"
          />
          <p className="font-body-md">
            Premier refrigerated logistics headquartered in Green Bay, WI. Ensuring fresh delivery nationwide.
          </p>
          <div className="footer-icons">
            <span className="material-symbols-outlined">local_shipping</span>
            <span className="material-symbols-outlined">verified_user</span>
          </div>
        </div>

        <div className="footer-nav">
          <h4 className="font-label-md footer-heading">Navigation</h4>
          <ul>
            <li><Link to="/" className="font-label-md nav-link">Home</Link></li>
            <li><Link to="/services" className="font-label-md nav-link">Services</Link></li>
            <li><Link to="/about" className="font-label-md nav-link">About</Link></li>
            <li><Link to="/contact" className="font-label-md nav-link">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-services">
          <h4 className="font-label-md footer-heading">Our Services</h4>
          <ul>
            <li className="font-label-md list-item">Reefer Trucking</li>
            <li className="font-label-md list-item">Cold Storage Solutions</li>
            <li className="font-label-md list-item">LTL/FTL Logistics</li>
            <li className="font-label-md list-item">Expedited Delivery</li>
          </ul>
        </div>

        <div className="footer-legal">

          <div className="footer-contact-info">
            <p className="font-label-md text-small">Green Bay, WI</p>
            <p className="font-label-md text-small">920-530-5147</p>
            <p className="font-label-md text-small">skylandexpressllc1@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="font-label-md">© 2024 Skyland Express LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
