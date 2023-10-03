import React from 'react'
import { Link } from "react-router-dom";



function Home() {
  return (
    <div >
        {/* <video className='video' src="https://yootheme.com/site/images/media/yootheme-pro.mp4" width="1800" height="1200" loop muted playsinline uk-video="autoplay: inview"></video> */}

       {/* Slider */}
       <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="autoplay: true">

    <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m">
        <li>
            <img className='Slide' src="https://img.freepik.com/free-photo/black-t-shirt-is-hanging-hanger-with-word-dope-it_1340-38184.jpg"  alt="" />
            {/* <div class="uk-position-center uk-panel"><h1>1</h1></div> */}
        </li>
        <li>
            <img className='Slide' src="https://img.freepik.com/free-photo/black-shirt-with-word-ultra-it_1340-37775.jpg"  alt="" />
            {/* <div class="uk-position-center uk-panel"><h1>2</h1></div> */}
        </li>
        <li>
            <img className='Slide' src="https://img.freepik.com/free-photo/red-shirt-is-box-with-red-box-background_1340-38146.jpg"  alt="" />
            {/* <div class="uk-position-center uk-panel"><h1>3</h1></div> */}
        </li>
        <li>
            <img className='Slide' src="https://img.freepik.com/free-photo/fashionable-men-winter-jacket-with-zipper-close-up-generated-by-ai_188544-43270.jpg"  alt="" />
            {/* <div class="uk-position-center uk-panel"><h1>4</h1></div> */}
        </li>
        <li>
            <img className='Slide' src="https://img.freepik.com/free-photo/dark-glass-bottle-with-single-liquid-drop-generative-ai_188544-9634.jpg"  alt="" />
            {/* <div class="uk-position-center uk-panel"><h1>5</h1></div> */}

        </li>
        <li>
            <img className='Slide' src="https://img.freepik.com/free-photo/young-couple-embracing-autumn-nature-smiling-generated-by-ai_188544-54279.jpg"  alt="" />
            {/* <div class="uk-position-center uk-panel"><h1>6</h1></div> */}
        </li>
        <li>
            <img className='Slide' src="https://img.freepik.com/free-photo/young-adults-funky-clothing-enjoying-outdoors-generated-by-ai_188544-37450.jpg"  alt="" />
            {/* <div class="uk-position-center uk-panel"><h1>7</h1></div> */}
        </li>
        <li>
            <img className='Slide' src="https://img.freepik.com/free-photo/multi-ethnic-group-young-adults-smiling-generated-by-ai_24640-81233.jpg"  alt="" />
            {/* <div class="uk-position-center uk-panel"><h1>8</h1></div> */}
        </li>
        <li>
            {/* <img className='Slide' src="https://img.freepik.com/free-photo/young-adults-embrace-fashionable-city-night-generated-by-ai_188544-38888.jpg"  alt="" /> */}
            {/* <div class="uk-position-center uk-panel"><h1>9</h1></div> */}
        </li>
        <li>
            {/* <img className='Slide' src="https://img.freepik.com/free-photo/two-women-are-standing-outside-store-one-them-is-wearing-green-jacket_1340-38174.jpg"  alt="" /> */}
            {/* <div class="uk-position-center uk-panel"><h1>10</h1></div> */}
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>




       {/* Slider ending */}



<hr class="uk-divider-icon"></hr>
<h1 className='trend'>Trending Products</h1>
<div className='container'>
<div className='content-1'>
<h3>Women's dress under $40</h3>
<div className='w-container'>
<div className='w-d-1'>
 <img src ="https://img.freepik.com/free-photo/denim-jacket-wooden-table-workshop-generated-by-ai_188544-37291.jpg" className='w-img' />
 <a href="/Items"><h5>Jacket</h5></a>
</div>
<div className="w-d-2">
<img src ="https://img.freepik.com/free-photo/young-adult-athlete-exercising-yellow-raincoat-generated-by-ai_188544-40053.jpg" className='w-img-2' />
<a href="/Items"><h5>Hoodie</h5></a>

</div>
<div className="w-d-3">
<img src ="https://img.freepik.com/free-photo/smiling-child-playing-wet-snow-generated-by-ai_188544-33131.jpg" className='w-img-2' />
 
 <a href="/Items"><h5>Sweaters</h5></a>

</div>
<div className="w-d-4">
<img src ="https://img.freepik.com/free-photo/winter-warmth-with-knitted-woolen-mittens-generated-by-ai_188544-11160.jpg" className='w-img-4' />
 <h5 className='h-4'><a href="/Items">Head-scaff</a></h5>

 </div>
 
</div>
{/* <div>
<Link to="/Items"> <button>Shop and Save</button> </Link>
</div> */}
</div>


<div className='content-2'>
<h3>Fall Dress Under $60</h3>
<img className='img-cont' src="https://img.freepik.com/free-photo/portrait-smiling-man-snow_23-2150771181.jpg" />
<div>
    <div className='deal'>Up to 50% off</div>
</div> 
<p>Product is such an amazing item, tested and trusted</p>
<br/>
<br/>
<button class="uk-button uk-button-link"><a className='a-off' href="/Items">See all deals</a></button>
</div>
<div className='content-3'>
<h4>Top Deal</h4>
<img className='img-cont-3' src="https://img.freepik.com/free-photo/woven-wool-cardigan-sweater-multi-colored-pattern-generated-by-ai_188544-37136.jpg" />
<div>
    <div className='deal'>Up to 50% off</div>
</div> 
<p>Product is such an amazing item, tested and trusted</p>
<br/>
<br/>
<button class="uk-button uk-button-link"><a className='a-off' href="/Items">See all deals</a></button>
</div>
</div>

<div className='second-container'>
    <div className='sub-cont'>
    <img className='img-cont' src="https://img.freepik.com/premium-photo/shot-young-man-woman-standing-together-cold-weather_762026-73225.jpg" />
<div>
    <div className='deal'>Up to 50% off</div>
</div> 
<p>Product is such an amazing item, tested and trusted</p>
<br/>
<br/>
<button class="uk-button uk-button-link"><a className='a-off' href="/Items">See all deals</a></button>
  
  
  </div>
    <div className='sub-cont-2'>
        <h5>Fall Favorite Fashion</h5>
        <div className='w-container'>
<div className='w-d-1'>
 <img src ="https://img.freepik.com/free-photo/denim-jacket-wooden-table-workshop-generated-by-ai_188544-37291.jpg" className='w-img' />
 <a href="/Items"><h5>Jacket</h5></a>
</div>
<div className="w-d-2">
<img src ="https://img.freepik.com/free-photo/young-adult-athlete-exercising-yellow-raincoat-generated-by-ai_188544-40053.jpg" className='w-img-2' />
<a href="/Items"><h5>Hoodie</h5></a>

</div>
<div className="w-d-3">
<img src ="https://img.freepik.com/free-photo/smiling-child-playing-wet-snow-generated-by-ai_188544-33131.jpg" className='w-img-2' />
 
 <a href="/Items"><h5>Sweaters</h5></a>

</div>
<div className="w-d-4">
<img src ="https://img.freepik.com/free-photo/winter-warmth-with-knitted-woolen-mittens-generated-by-ai_188544-11160.jpg" className='w-img-4' />
 <h5 className='h-4'><a href="/Items">Head-scaff</a></h5>

 </div>
 
</div>
    </div>
    <div className='sub-cont-3'>Men's deals Under $40
    
    <div className='w-container'>
<div className='w-d-1'>
 <img src ="https://img.freepik.com/free-photo/denim-jacket-wooden-table-workshop-generated-by-ai_188544-37291.jpg" className='w-img' />
 <a href="/Items"><h5>Jacket</h5></a>
</div>
<div className="w-d-2">
<img src ="https://img.freepik.com/free-photo/young-adult-athlete-exercising-yellow-raincoat-generated-by-ai_188544-40053.jpg" className='w-img-2' />
<a href="/Items"><h5>Hoodie</h5></a>

</div>
<div className="w-d-3">
<img src ="https://img.freepik.com/free-photo/smiling-child-playing-wet-snow-generated-by-ai_188544-33131.jpg" className='w-img-2' />
 
 <a href="/Items"><h5>Sweaters</h5></a>

</div>
<div className="w-d-4">
<img src ="https://img.freepik.com/free-photo/winter-warmth-with-knitted-woolen-mittens-generated-by-ai_188544-11160.jpg" className='w-img-4' />
 <h5 className='h-4'><a href="/Items">Head-scaff</a></h5>

 </div>
 
</div>
    </div>
</div>


<marquee>
<div className='scroller'>
<img className='semi1-img' src="https://img.freepik.com/premium-photo/woman-is-holding-shopping-bags-sign-that-says-shopping_772412-4568.jpg" />
<img className='semi1-img' src="https://img.freepik.com/premium-photo/woman-is-holding-shopping-bags-sign-that-says-shopping_772412-4568.jpg" />
<img className='semi1-img' src="https://img.freepik.com/premium-photo/woman-is-holding-shopping-bags-sign-that-says-shopping_772412-4568.jpg" />
<img className='semi1-img' src="https://img.freepik.com/premium-photo/woman-is-holding-shopping-bags-sign-that-says-shopping_772412-4568.jpg" />
</div>
</marquee>

<div className='trending-container'>
<div className='trending-content'>
 <div>
    <h2>New release</h2>
 </div>
 <hr />
</div>
<div className='trending-content'>

</div>
<div className='trending-content'>

</div>


</div>

<h4 class="uk-heading-small uk-heading-bullet">Limited-Time Offer: Shop Ahead and Save Big!</h4>
<div className='semi-cont'>
<div className='semi-1'>
    <img className='semi1-img' src="https://img.freepik.com/premium-photo/woman-is-holding-shopping-bags-sign-that-says-shopping_772412-4568.jpg" />
</div>
<div className='semi-2'>
<img className='semi1-img' src="https://img.freepik.com/premium-photo/woman-is-holding-shopping-bags-sign-that-says-shopping_772412-4568.jpg" />
</div>
<div className='semi-3'>
<img className='semi1-img' src="https://img.freepik.com/premium-photo/woman-is-holding-shopping-bags-sign-that-says-shopping_772412-4568.jpg" />
</div>
<div className='semi-4'>
<img className='semi1-img' src="https://img.freepik.com/premium-photo/woman-is-holding-shopping-bags-sign-that-says-shopping_772412-4568.jpg" />
</div>
</div>

<div className='faq'>
<div className='faq1'>FAQ
 <p>1. How do I place an order?</p>
 <p>2. What payment methods do you accept?</p>
 <p>3. How long does shipping take?</p>
 <p>4. Can I return or exchange a product?</p>
 <p>5. Are there any discounts or promotions available?</p>
 </div>
</div>




{/* <div class="uk-padding uk-background-muted uk-width-1-2@s main-content-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div> */}
{/* <div className="container">
<a href="#">
  <img  className='main-content' src="https://images.pexels.com/photos/17917173/pexels-photo-17917173/free-photo-of-young-man-and-woman-posing-in-gym-clothing.jpeg?auto=compress&cs=tinysrgb&w=1600"></img>
  <button class="uk-button uk-button-default">Button</button>
  </a>
 
</div> */}
<hr class="uk-divider-icon"></hr>
{/* <div class="uk-padding uk-background-muted uk-width-1-2@s main-content-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div> */}
<hr class="uk-divider-icon"></hr>
{/* <hr class="uk-divider-icon"></hr> */}

{/* <div className="container">
<a href="#">
  <img  className='main-content' src="https://images.pexels.com/photos/17850454/pexels-photo-17850454/free-photo-of-young-man-in-a-casual-trendy-outfit-posing-in-studio-on-yellow-background.jpeg?auto=compress&cs=tinysrgb&w=1600"></img>
  <button class="uk-button uk-button-default">Button</button>
  </a>

</div> */}
<hr class="uk-divider-icon"></hr>
<br/>
{/* <div class="uk-padding uk-background-muted uk-width-1-2@s main-content-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div> */}
{/* <div className="container">
<a href="#">
  <img  className='main-content' src="https://images.pexels.com/photos/17862339/pexels-photo-17862339/free-photo-of-man-with-backpack-holding-camera.jpeg?auto=compress&cs=tinysrgb&w=1600"></img>
  <button class="uk-button uk-button-default">Button</button>
  </a>
</div> */}
{/* <div class="uk-padding uk-background-muted uk-width-1-2@s main-content-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div> */}

<hr class="uk-divider-icon"></hr>
{/* <div class="uk-padding uk-background-muted uk-width-1-2@s main-content-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div> */}
{/* <div className="container">
<a href="#">
  <img  className='main-content' src="https://images.pexels.com/photos/17840324/pexels-photo-17840324/free-photo-of-man-in-vest-and-shadow-on-wall.jpeg?auto=compress&cs=tinysrgb&w=1600"></img>
  <button class="uk-button uk-button-default">Button</button>
  </a>
</div> */}
{/* <div class="uk-padding uk-background-muted uk-width-1-2@s">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div> */}
  <br/>
  <br/>
  <hr class="uk-divider-icon"></hr>
{/* <div id="box">
    <div class="top"></div>
    <div>
     <span></span>
     <span>
        <i class='tape'></i>
     </span>
     <span></span>
     <span>
        <i class='tape'></i>
     </span>
   </div>
  </div> */}



<br />
{/* <div uk-slider="autoplay: true">
<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>

    <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
        <li>
            <img src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/81b724fa419569fb2d2be18e7d368291.jpg?imageView2/2/w/800/q/70/format/webp" className="imag" alt="" />
            <div class="uk-position-center uk-panel"><h1>1</h1></div>
        </li>
        <li>
            <img src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/95363959a8937b7ce4f79fbaff76b110.jpg?imageView2/2/w/800/q/70/format/webp" className="imag" alt="" />
            <div class="uk-position-center uk-panel"><h1>2</h1></div>
        </li>
        <li>
            <img src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8e08eea04a5b73e8f7baa594017ff542.jpg?imageView2/2/w/800/q/70/format/webp" className="imag" alt="" />
            <div class="uk-position-center uk-panel"><h1>3</h1></div>
        </li>
        <li>
            <img src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/01241c3fb2980fffb2c4363ed4cc9ee7.jpg?imageView2/2/w/800/q/70/format/webp" className="imag" alt="" />
            <div class="uk-position-center uk-panel"><h1>4</h1></div>
        </li>
        <li>
            <img src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/cd0c4b460808171d67c34f2cbd93d94b.jpg?imageView2/2/w/800/q/70/format/webp" className="imag" alt="" />
            <div class="uk-position-center uk-panel"><h1>5</h1></div>
        </li>
        <li>
            <img src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/b62946d2db73e73bd3efa94e89b18849.jpg?imageView2/2/w/800/q/70/format/webp" className="imag" alt="" />
            <div class="uk-position-center uk-panel"><h1>6</h1></div>
        </li>
        <li>
            <img src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/ee24713b1b0ce238fec971aa91910e7e.jpg?imageView2/2/w/800/q/70/format/webp" className="imag" alt="" />
            <div class="uk-position-center uk-panel"><h1>7</h1></div>
        </li>
        <li>
            <img src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/ab34676b4e58cdf36a983c1133b9e63b.jpg?imageView2/2/w/800/q/70/format/webp" className="imag" alt="" />
            <div class="uk-position-center uk-panel"><h1>8</h1></div>
        </li>
        <li>
            <img src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/c3233a685d4ceb7e7266bf7a46254f2d.jpg?imageView2/2/w/800/q/70/format/webp" className="imag" alt="" />
            <div class="uk-position-center uk-panel"><h1>9</h1></div>
        </li>
        <li>
            <img className="imag" src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/09abf0f28ca19d41ef50109159829bde.jpg?imageView2/2/w/800/q/70/format/webp"  alt="" />
            <div class="uk-position-center uk-panel"><h1>10</h1></div>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
</div> */}


{/* <hr class="uk-divider-icon"></hr> */}
     



  <hr class="uk-divider-icon"></hr>
  
  
<button class="uk-button uk-button-default"><a href="" uk-totop>Top</a></button>

    </div>
  )
}

export default Home