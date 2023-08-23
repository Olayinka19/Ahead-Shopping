import React, { useState } from 'react';
import CartIcon from './CartIcon';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
    <div className="logo">Ahead-Store</div>
    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
      <li><a class="uk-button uk-button-default" href="/Items">Shop</a></li>
        <a class="uk-button uk-button-default" href="/AboutMe">About</a>
          <a class="uk-button uk-button-default" href="/BlogPost">BlogPost</a>
          <a class="uk-button uk-button-default" href="/ContactUs">Contact</a>
          <CartIcon />
      <li className="dropdown">
        <div className="dropdown-content">
          {/* Add more dropdown items */}
        </div>
      </li>
      {/* Add more navigation links */}
    </ul>
    <div className="menu-toggle" onClick={toggleMenu}>
      <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
    </div>
  </nav>
  );
};

export default NavBar;
