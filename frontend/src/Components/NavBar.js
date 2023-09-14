import React, { useState } from 'react';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ cartItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItemCount = cartItems.length;
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
    <div className="logo"><Link to="/">Ahead-Store</Link></div>
    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
    
      <li><a class="uk-button uk-button-default" href="/Items">Shop</a></li>
        <a class="uk-button uk-button-default" href="/AboutMe">About</a>
          <a class="uk-button uk-button-default" href="/BlogPost">BlogPost</a>
          <a class="uk-button uk-button-default" href="/ContactUs">Contact</a>
          
      <li className="dropdown">
      <div className="cart-icon nav-links">
        🛒
        <span className="cart-count">{cartItemCount}</span>
      </div>
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
