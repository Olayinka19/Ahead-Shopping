import React, { useState } from 'react';
// import Cart from './Cart';
import { Link } from 'react-router-dom';
// import Signin from '../Components/Signin';
import hendrix from '../assets/hendrix.JPG';
import { UserAuth } from '../Context/AuthContext';
import './NavBar.css';

const NavBar = ({ cartItemCount, onCartClick, item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoDropdownOpen, setIsLogoDropdownOpen] = useState(false);

  const { user, logOut } = UserAuth();
  // const cartItemCount = cartItems.length;
  const toggleNavbar = () => {
    setIsOpen(!isOpen);

}
const toggleLogoDropdown = () => {
    setIsLogoDropdownOpen(!isLogoDropdownOpen);
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
    <div class="Nav">
    <nav className="navbar">
       <div className="navbar-container">
         <div className={`navbar-logo ${isLogoDropdownOpen ? 'active' : ''}`} onClick={toggleLogoDropdown}>
           <a href="/"><img alt="pfp" src={hendrix} width="50px" height="50px" ></img> </a>
           
           <div className="dropdown-content">
             
            
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
             <a href="/Products">Products</a>
             <a href="/Learn">☞Learn📚</a>
             {/* <a href="/podcast">Podcast🎙️</a>
             <a href="/Projects">Projects🎖️</a>
             <a href="/Resume">Resume👨🏽‍💻</a>
             <a href="/Soccer">☞Soccer🎮</a>
             <a href="/Skills">☞Skills🌟</a>
             <a href="/Blog">☞Blog✍🏽</a> */}
           </div>
         </div>
         <h2>Ahead-store </h2>
         <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <h2><a href="/">Home</a></h2> 
           <h2><a href="/">Blog</a></h2>
           {/* <a href="/Tutorials">Tutorials</a> */}
           {/* <div className="dropdown">
             <button className="dropbtn">Projects <i className="fas fa-chevron-down"></i></button>
             <div className="dropdown-content">
               <a href="/https://ahead-store.netlify.app/">Ahead-Shopping</a>
               <a href="/">Pawster</a>
               <a href="/">NFT Project</a>
             </div>
           </div> */}
          <h2><a href="/Contact">Contact</a></h2> 
         </div>
         <div className="navbar-toggle" onClick={toggleNavbar}>
           <i className={`fas fa-${isOpen ? 'times' : 'bars'}`}></i>
         </div>
       </div>
     </nav>
     </div>
  );
};

export default NavBar;
