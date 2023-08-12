import React from 'react';
import { useState } from 'react';
import CartIcon from './CartIcon';
import { Link } from "react-router-dom";

function NavBar() {
    const [cartItems, setCartItems] = useState([]);
    const initialCartItemCount = cartItems.length;
  return (
    <div uk-sticky>


{/* <nav class="uk-navbar-container uk-margin">
    <div class="uk-container">
        <div uk-navbar>

            <div class="uk-navbar-left">
                <a class="uk-navbar-toggle" uk-navbar-toggle-icon href="#"></a>
            </div>
        
        </div>
    </div>
</nav> */}



<nav class="uk-navbar-container uk-margin">
    <div class="uk-container">
        <div uk-navbar>

            <div class="uk-navbar-left">
                <a class="uk-navbar-toggle" href="#">
                {/* <button class="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-nav-primary">Menu</button> */}

<button class="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-nav"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconbolt.com%2Fpreview%2Ffacebook%2Fdripicons%2Fmenu.svg&f=1&nofb=1&ipt=3dad0d32135d4c435bb7097284feac2dae6061687936bc992985f600f871a4b6&ipo=images" width="30px" height="30px" />Menu</button>
<button class="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-nav"> <Link to="/Items">Shop</Link></button>


<CartIcon initialItemCount={initialCartItemCount} />
<div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar uk-flex uk-flex-column">

        <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            <li class="uk-active"><Link to="/Show">Shop</Link></li>
            <li class="uk-parent">
            <Link to="/">Home</Link>
                <ul class="uk-nav-sub">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </li>
            <li class="uk-nav-header">Header</li>
            <li><Link to="/BlogPost">Blog Post</Link></li>
            <li><Link to="/BlogPost">Blog Post</Link></li>
            <li class="uk-nav-divider"></li>
            <li><Link to="/BlogPost">Blog Post</Link></li>
        </ul>

    </div>
</div>

<div id="offcanvas-nav" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar">

        <ul class="uk-nav uk-nav-default">
            <li class="uk-active"><a href="/"><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2FncB%2FM6p%2FncBM6pg4i.png&f=1&nofb=1&ipt=96393183749527f84cb6eb1ef85ca05ef867ec32edb5819768067e57949b521e&ipo=images" width="30px" height="30px" /></a></li>
            <li class="uk-parent">
            <Link to="/Projects">Projects</Link>
                <ul class="uk-nav-sub">
                    <li><Link to="/AIPodcast">AI-Podcast</Link></li>
                    <li><Link to="/BlogPost">Blog Post</Link></li>
                </ul>
            </li>
            <li class="uk-nav-divider"></li>
            <li class="uk-nav-header">Ahead-Store</li>
            <li><Link to="/Items"><span class="uk-margin-small-right" uk-icon="icon: table"></span> Shop</Link></li>
            <li><Link to="/AboutMe"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> About</Link></li>
            <li class="uk-nav-divider"></li>
            <li><Link to="/ContactUs"><span class="uk-margin-small-right" uk-icon="icon: trash"></span> Contact Us</Link></li>
        </ul>

    </div>
</div>
                </a>
            </div>
            

        </div>
    </div>
</nav>

    </div>
  )
}

export default NavBar