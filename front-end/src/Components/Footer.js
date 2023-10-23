import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import './Footer.css'; // Your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
    <br/>
      <div className="social-icons">
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
        
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
      <p>&copy; 2023 Ahead-Shopping. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

