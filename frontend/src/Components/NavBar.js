import React from 'react'

function NavBar() {
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

<button class="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-nav">Menu</button>

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
            <li class="uk-active"><a href="/">Home</a></li>
            <li class="uk-parent">
                <a href="#">Projects</a>
                <ul class="uk-nav-sub">
                    <li><a href="#">Affiliate Marketting</a></li>
                    <li><a href="#">Blog Post</a></li>
                </ul>
            </li>
            <li class="uk-nav-header">Ahead-Store</li>
            <li><a href="/Items"><span class="uk-margin-small-right" uk-icon="icon: table"></span> Shop</a></li>
            <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> About</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: trash"></span> Contact Us</a></li>
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