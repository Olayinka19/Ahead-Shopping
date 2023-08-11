import React from 'react';
import { useState } from 'react';
import CartIcon from './CartIcon';

function NavBar() {
    const [cartItems, setCartItems] = useState([]);
    const initialCartItemCount = cartItems.length;
  return (
    <div>


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

<CartIcon initialItemCount={initialCartItemCount} />
<div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar uk-flex uk-flex-column">

        <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            <li class="uk-active"><a href="/Show">Shop</a></li>
            <li class="uk-parent">
                <a href="#">Parent</a>
                <ul class="uk-nav-sub">
                    <li><a href="#">Sub item</a></li>
                    <li><a href="#">Sub item</a></li>
                </ul>
            </li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: table"></span> Item</a></li>
            <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li>
        </ul>

    </div>
</div>

<div id="offcanvas-nav" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar">

        <ul class="uk-nav uk-nav-default">
            <li class="uk-active"><a href="/"><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2FncB%2FM6p%2FncBM6pg4i.png&f=1&nofb=1&ipt=96393183749527f84cb6eb1ef85ca05ef867ec32edb5819768067e57949b521e&ipo=images" width="30px" height="30px" /></a></li>
            <li class="uk-parent">
                <a href="#">Projects</a>
                <ul class="uk-nav-sub">
                    <li><a href="#">Affiliate Marketting</a></li>
                    <li><a href="/BlogPost">Blog Post</a></li>
                </ul>
            </li>
            <li class="uk-nav-divider"></li>
            <li class="uk-nav-header">Ahead-Store</li>
            <li><a href="/Items"><span class="uk-margin-small-right" uk-icon="icon: table"></span> Shop</a></li>
            <li><a href="/AboutMe"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> About</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="/ContactUs"><span class="uk-margin-small-right" uk-icon="icon: trash"></span> Contact Us</a></li>
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