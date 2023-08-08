import React from 'react'

function NavBar() {
  return (
    <div>


<nav class="uk-navbar-container">
    <div class="uk-container">
        <div uk-navbar>

            <div class="uk-navbar-left">

                <ul class="uk-navbar-nav">
                    <li class="uk-active"><a href="#">CATEGORY</a></li>
                    <li>
                        <a href="#">ABOUT</a>
                        <div class="uk-navbar-dropdown" uk-drop="boundary: !.uk-navbar; stretch: x; flip: false">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li class="uk-active"><a href="#">Ahead Fashion Gallerry</a></li>
                                <li><a href="#">Fashion</a></li>
                                <li class="uk-nav-header">Men</li>
                                <li><a href="#">Women</a></li>
                                <li><a href="#">Bags</a></li>
                                <li class="uk-nav-divider"></li>
                                <li><a href="#">Products</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#">Computers</a>
                        <div class="uk-navbar-dropdown" uk-drop="boundary: !.uk-navbar; stretch: x; flip: false">
                            <div class="uk-drop-grid uk-child-width-1-2" uk-grid>
                                <div>
                                    <ul class="uk-nav uk-navbar-dropdown-nav">
                                        <li class="uk-active"><a href="#">Laptops</a></li>
                                        <li><a href="#">Smart Phones</a></li>
                                        <li class="uk-nav-header">Chargers</li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#">Item</a></li>
                                        <li class="uk-nav-divider"></li>
                                        <li><a href="#">Item</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul class="uk-nav uk-navbar-dropdown-nav">
                                        <li class="uk-active"><a href="#">Active</a></li>
                                        <li><a href="#">Item</a></li>
                                        <li class="uk-nav-header">Header</li>
                                        <li><a href="#">Item</a></li>
                                        <li><a href="#">Item</a></li>
                                        <li class="uk-nav-divider"></li>
                                        <li><a href="#">Item</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>

        </div>
    </div>
</nav>

    </div>
  )
}

export default NavBar