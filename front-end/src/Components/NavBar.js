import React, { useState } from 'react';
// import Cart from './Cart';
import { Link } from 'react-router-dom';
// import Signin from '../Components/Signin';
import { UserAuth } from '../Context/AuthContext';
import './NavBar.css';

const NavBar = ({ cartItemCount, onCartClick, item }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = UserAuth();
  // const cartItemCount = cartItems.length;
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // const [isCartOpen, setIsCartOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }
  // const toggleCart = () => {
  //   setIsCartOpen(!isCartOpen);
  // };

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
    <div className="logo"><Link to="/">Ahead-Store</Link></div>
    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
    
      {/* <li><a class="uk-button uk-button-default" href="/Items">Products</a></li> */}
      {/* <li><a href="/Items">Products</a>
      <ul class="dropdown">
        <li><a href="#">Handbags</a></li>
        <li><a href="#">Travel</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">Men</a></li>
      </ul>
    </li> */}
        {/* <li>
        <a class="uk-button uk-button-default" href="/">Categories</a></li> */}
        <li><a href="/Items">Products</a></li>
    {/* <li><a href="#">Account</a>
      <ul class="dropdown">
        <li><a href="/account">Profile</a></li>
    
        <li><a href="#">Log Out</a></li>
      </ul>
    </li> */}
    {/* <li><a href="#">Blog Post</a>
      <ul class="dropdown">
        <li><a href="#">Product Updates</a></li>
        <li><a href="#">How-to Guides</a></li>
        <li><a href="#">Ahead-store News</a></li>
        
      </ul>
    </li> */}
    {/* <li><a href="#">Contacts</a>
      <ul class="dropdown">
        <li><a href="#">Customer Support</a></li>
        <li><a href="#">Live Chat</a></li>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Log Out</a></li>
      </ul>
    </li> */}
    {/* <li><a href="#">Dashboard</a>
      <ul class="dropdown">
        <li><a href="#">Overview</a></li>
      
      </ul>
    </li> */}
    <li><a onClick={onCartClick} href="#">🛒</a>
      {/* <ul class="dropdown">
        <li><a href="#"><button class="uk-button uk-button-default" onClick={onCartClick}> 🛒 {cartItemCount}</button></a></li>
       
      </ul> */}
    </li>
  
     
    <li>
    {user?.displayName ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <Link to='/signin'>Log In</Link>
      )}
      {/* <ul class="dropdown">
        <li><a href="#"> </a> </li>
      </ul> */}
    </li>
        
       
          {/* <li><a class="uk-button uk-button-default" href="/">SignUp</a></li> */}
          {/* <a class="uk-button uk-button-default" href="/ContactUs">Contact</a> */}
          
      <li className="dropdown">
      <div className="cart-icon nav-links">
        {/* <li>
          <button class="uk-button uk-button-default" onClick={onCartClick}> 🛒 {cartItemCount}</button>
        </li> */}
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
