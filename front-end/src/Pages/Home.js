import React from 'react'
import './Home.css'
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
<h1 className='trend uk-heading-small uk-heading-bullet'>Trending Products</h1>
<div className='Trend'>
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
<button class="uk-button uk-button-default"><a className='a-off' href="/Items">See all deals</a></button>
</div>
</div>
<h4 class="uk-heading-small uk-heading-bullet">Fall Dresses Under $60</h4>
<div className='second-container'>
    <div className='sub-cont'>
    <img className='img-cont' src="https://img.freepik.com/premium-photo/shot-young-man-woman-standing-together-cold-weather_762026-73225.jpg" />
<div>
    <div className='deal'>Up to 50% off</div>
</div> 
<p>Product is such an amazing item, tested and trusted</p>
<br/>
<br/>
<button class="uk-button uk-button-warning"><a className='a-off' href="/Items">See all deals</a></button>
  
  
  </div>
  
    <div className='sub-cont-2'>
        <h5>Fall Favorite Fashion</h5>
        <div className='w-container'>
<div className='w-d-1'>
 <img src ="https://images.pexels.com/photos/1868735/pexels-photo-1868735.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-img' />
 <a href="/Items"><h5>Jacket</h5></a>
</div>
<div className="w-d-2">
<img src ="https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600" className='w-img-2' />
<a href="/Items"><h5>Hoodie</h5></a>

</div>
<div className="w-d-3">
<img src ="https://images.pexels.com/photos/905247/pexels-photo-905247.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-img-2' />
 
 <a href="/Items"><h5>Sweaters</h5></a>

</div>
<div className="w-d-4">
<img src ="https://images.pexels.com/photos/1761683/pexels-photo-1761683.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-img-4' />
 <h5 className='h-4'><a href="/Items">Head-scaff</a></h5>

 </div>
 
</div>
    </div>
    <div className='sub-cont-3'>Men's deals Under $40
    
    <div className='w-container'>
<div className='w-d-1'>
 <img src ="https://images.pexels.com/photos/1620654/pexels-photo-1620654.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-img' />
 <a href="/Items"><h5>Jacket</h5></a>
</div>
<div className="w-d-2">
<img src ="https://images.pexels.com/photos/7037431/pexels-photo-7037431.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-img-2' />
<a href="/Items"><h5>Hoodie</h5></a>

</div>
<div className="w-d-3">
<img src ="https://images.pexels.com/photos/1181498/pexels-photo-1181498.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-img-2' />
 
 <a href="/Items"><h5>Sweaters</h5></a>

</div>
<div className="w-d-4">
<img src ="https://img.freepik.com/free-photo/winter-warmth-with-knitted-woolen-mittens-generated-by-ai_188544-11160.jpg" className='w-img-4' />
 <h5 className='h-4'><a href="/Items">Head-scaff</a></h5>

 </div>
 
</div>
    </div>
</div>


{/* <marquee>
<div className='scroller'>
<img className='semi1-img' src="https://media.istockphoto.com/id/1328315054/photo/woman-influencer-selling-clothes-online.jpg?b=1&s=612x612&w=0&k=20&c=D4aS_SivXOeeKQzpk-FOd583HrODtYUHHNXOMjAAe10=" />
<img className='semi1-img' src="https://img.freepik.com/premium-photo/woman-is-holding-shopping-bags-sign-that-says-shopping_772412-4568.jpg" />
<img className='semi1-img' src="https://img.freepik.com/premium-photo/woman-is-holding-shopping-bags-sign-that-says-shopping_772412-4568.jpg" />
<img className='semi1-img' src="https://img.freepik.com/premium-photo/woman-is-holding-shopping-bags-sign-that-says-shopping_772412-4568.jpg" />
</div>
</marquee> */}

<div className='trending-container'>
<div className=''>

 <img className='semi1-img'  src="https://images.pexels.com/photos/7037433/pexels-photo-7037433.jpeg?auto=compress&cs=tinysrgb&w=1600" />
 <br/>
<button class="uk-button uk-button-default">Buy Now</button>

 {/* <hr /> */}
</div>
<div className=''>
<img className='semi1-img' src="https://images.pexels.com/photos/6816055/pexels-photo-6816055.jpeg?auto=compress&cs=tinysrgb&w=1600" />
<br/>
<button class="uk-button uk-button-default">Buy Now</button>
</div>
<div className=''>
<img className='semi1-img' src="https://images.pexels.com/photos/6816020/pexels-photo-6816020.jpeg?auto=compress&cs=tinysrgb&w=1600" />
<br/>
<button class="uk-button uk-button-default">Buy Now</button>
</div>


</div>


<h1 class="uk-heading-small uk-heading-bullet">Limited-Time Offer: Shop Ahead and Save Big!</h1>
<div className='semi-cont'>
<div className='semi-1'>
    <img className='semi1-img' src="https://images.pexels.com/photos/2008388/pexels-photo-2008388.jpeg?auto=compress&cs=tinysrgb&w=1600" />
    <br/>
<button class="uk-button uk-button-default">Buy Now</button>
</div>
{/* <div className='semi-2'>
<img className='semi1-img' src="https://images.pexels.com/photos/5352635/pexels-photo-5352635.jpeg?auto=compress&cs=tinysrgb&w=1600" />
</div> */}
<div className='semi-3'>
<img className='semi1-img' src="https://images.pexels.com/photos/7037431/pexels-photo-7037431.jpeg?auto=compress&cs=tinysrgb&w=1600" />
<br/>
<button class="uk-button uk-button-default">Buy Now</button>
</div>
<div className='semi-4'>
<img className='semi1-img' src="https://images.pexels.com/photos/6500568/pexels-photo-6500568.jpeg?auto=compress&cs=tinysrgb&w=1600" />
<br/>
<button class="uk-button uk-button-default">Buy Now</button>
</div>
</div>







  <br/>
  <br/>
 




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
     



 <h1 class="uk-heading-small uk-heading-bullet">Best Sellers in Grocery & Food</h1>
 <div className="bestSellers" >
 <img className='sellers' src=" https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b96c2b7-6ff7-4ed6-b3bb-3d2793cfaed7/dgbpkuq-7ba207b2-0f1d-4f88-b409-effea2812e83.jpg/v1/fit/w_828,h_1060,q_70,strp/an_angel_for_the_holy_land_by_hylanvahr_dgbpkuq-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMxMiIsInBhdGgiOiJcL2ZcLzliOTZjMmI3LTZmZjctNGVkNi1iM2JiLTNkMjc5M2NmYWVkN1wvZGdicGt1cS03YmEyMDdiMi0wZjFkLTRmODgtYjQwOS1lZmZlYTI4MTJlODMuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5N8YScgnEsymB9-pnmNA3VVpgGTG2eEbyAmM7TlaxMs" />
 <img className='sellers' src=" https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b96c2b7-6ff7-4ed6-b3bb-3d2793cfaed7/dgdhqcg-7bfc29c2-8498-4758-8640-fe61123f9f22.jpg/v1/fit/w_828,h_1210,q_70,strp/scryer__the_hand_of_thoth_by_hylanvahr_dgdhqcg-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ5NiIsInBhdGgiOiJcL2ZcLzliOTZjMmI3LTZmZjctNGVkNi1iM2JiLTNkMjc5M2NmYWVkN1wvZGdkaHFjZy03YmZjMjljMi04NDk4LTQ3NTgtODY0MC1mZTYxMTIzZjlmMjIuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6bj7ojjKTjv7IR9t5x78OA2-G92qWBStYY6VIhnxtRw" />
 <img className="sellers" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b96c2b7-6ff7-4ed6-b3bb-3d2793cfaed7/dgbd6it-1c9bd867-0d08-4c3d-bc14-5ba729920f09.jpg/v1/fit/w_828,h_1210,q_70,strp/forever_red_by_hylanvahr_dgbd6it-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ5NiIsInBhdGgiOiJcL2ZcLzliOTZjMmI3LTZmZjctNGVkNi1iM2JiLTNkMjc5M2NmYWVkN1wvZGdiZDZpdC0xYzliZDg2Ny0wZDA4LTRjM2QtYmMxNC01YmE3Mjk5MjBmMDkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vRgoR0xVOd4XRB6uwCaCQbMekI-PaKupAingVai4LQ4 " />
 <img className="sellers" src=" " />
 <img className="sellers" src=" " />
 <img className='sellers' src=" " />
 <img className='sellers' src=" " />
 <img className='sellers' src=" " />

 </div>
 <br/>
<h1 class="uk-heading-small uk-heading-bullet">Ahead Live | Store Streams</h1>
 <div className='ahead-live' >
 <iframe src="https://www.youtube.com/watch?v=ScKCy2udln8&t=449s&ab_channel=freeCodeCamp.org" width="300px" height="300px" />

 
 <img className="ahead-live-sellers" src=" " />
 <img className="ahead-live-sellers" src=" " />
 <img className='ahead-live-sellers' src=" " />
 <img className='ahead-live-sellers' src=" " />
 <img className='ahead-live-ellers' src=" " />

 </div>
  
  <br/>
  <h1 class="uk-heading-small uk-heading-bullet">Best Sellers in Books</h1>
  <div>
  <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>

<ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
    <li>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b96c2b7-6ff7-4ed6-b3bb-3d2793cfaed7/dgbd6it-1c9bd867-0d08-4c3d-bc14-5ba729920f09.jpg/v1/fit/w_828,h_1210,q_70,strp/forever_red_by_hylanvahr_dgbd6it-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ5NiIsInBhdGgiOiJcL2ZcLzliOTZjMmI3LTZmZjctNGVkNi1iM2JiLTNkMjc5M2NmYWVkN1wvZGdiZDZpdC0xYzliZDg2Ny0wZDA4LTRjM2QtYmMxNC01YmE3Mjk5MjBmMDkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vRgoR0xVOd4XRB6uwCaCQbMekI-PaKupAingVai4LQ4" width="400" height="400" alt="" />
        <div class="uk-position-center uk-panel"><h1>1</h1></div>
    </li>
    <li>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b96c2b7-6ff7-4ed6-b3bb-3d2793cfaed7/dgbd6it-1c9bd867-0d08-4c3d-bc14-5ba729920f09.jpg/v1/fit/w_828,h_1210,q_70,strp/forever_red_by_hylanvahr_dgbd6it-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ5NiIsInBhdGgiOiJcL2ZcLzliOTZjMmI3LTZmZjctNGVkNi1iM2JiLTNkMjc5M2NmYWVkN1wvZGdiZDZpdC0xYzliZDg2Ny0wZDA4LTRjM2QtYmMxNC01YmE3Mjk5MjBmMDkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vRgoR0xVOd4XRB6uwCaCQbMekI-PaKupAingVai4LQ4" width="400" height="400" alt="" />
        <div class="uk-position-center uk-panel"><h1>2</h1></div>
    </li>
    <li>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b96c2b7-6ff7-4ed6-b3bb-3d2793cfaed7/dgbd6it-1c9bd867-0d08-4c3d-bc14-5ba729920f09.jpg/v1/fit/w_828,h_1210,q_70,strp/forever_red_by_hylanvahr_dgbd6it-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ5NiIsInBhdGgiOiJcL2ZcLzliOTZjMmI3LTZmZjctNGVkNi1iM2JiLTNkMjc5M2NmYWVkN1wvZGdiZDZpdC0xYzliZDg2Ny0wZDA4LTRjM2QtYmMxNC01YmE3Mjk5MjBmMDkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vRgoR0xVOd4XRB6uwCaCQbMekI-PaKupAingVai4LQ4" width="400" height="400" alt="" />
        <div class="uk-position-center uk-panel"><h1>3</h1></div>
    </li>
    <li>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b96c2b7-6ff7-4ed6-b3bb-3d2793cfaed7/dgbd6it-1c9bd867-0d08-4c3d-bc14-5ba729920f09.jpg/v1/fit/w_828,h_1210,q_70,strp/forever_red_by_hylanvahr_dgbd6it-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ5NiIsInBhdGgiOiJcL2ZcLzliOTZjMmI3LTZmZjctNGVkNi1iM2JiLTNkMjc5M2NmYWVkN1wvZGdiZDZpdC0xYzliZDg2Ny0wZDA4LTRjM2QtYmMxNC01YmE3Mjk5MjBmMDkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vRgoR0xVOd4XRB6uwCaCQbMekI-PaKupAingVai4LQ4" width="400" height="400" alt="" />
        <div class="uk-position-center uk-panel"><h1>4</h1></div>
    </li>
  
   
    
   
   
</ul>

<a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slider-item="previous"></a>
<a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slider-item="next"></a>

</div>
<br />
<h1 class="uk-heading-small uk-heading-bullet">Best Sellers in Movies</h1>
<div className="last-clothing">
    <div className="clothing-1">
    <h1>Get the movie</h1>
    <img className="clothing-1-image" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b96c2b7-6ff7-4ed6-b3bb-3d2793cfaed7/dgbd6it-1c9bd867-0d08-4c3d-bc14-5ba729920f09.jpg/v1/fit/w_828,h_1210,q_70,strp/forever_red_by_hylanvahr_dgbd6it-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ5NiIsInBhdGgiOiJcL2ZcLzliOTZjMmI3LTZmZjctNGVkNi1iM2JiLTNkMjc5M2NmYWVkN1wvZGdiZDZpdC0xYzliZDg2Ny0wZDA4LTRjM2QtYmMxNC01YmE3Mjk5MjBmMDkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vRgoR0xVOd4XRB6uwCaCQbMekI-PaKupAingVai4LQ4 " />
    <button className='clothing-btn'>Get Movie</button>
    </div>

    <div className="clothing-1">
    <h1>Get the movie</h1>
    <img className="clothing-1-image" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b96c2b7-6ff7-4ed6-b3bb-3d2793cfaed7/dgbd6it-1c9bd867-0d08-4c3d-bc14-5ba729920f09.jpg/v1/fit/w_828,h_1210,q_70,strp/forever_red_by_hylanvahr_dgbd6it-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ5NiIsInBhdGgiOiJcL2ZcLzliOTZjMmI3LTZmZjctNGVkNi1iM2JiLTNkMjc5M2NmYWVkN1wvZGdiZDZpdC0xYzliZDg2Ny0wZDA4LTRjM2QtYmMxNC01YmE3Mjk5MjBmMDkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vRgoR0xVOd4XRB6uwCaCQbMekI-PaKupAingVai4LQ4 " />
    <button className='clothing-btn'>Get Movie</button>
    </div>

    <div className="clothing-1">
    <h1>Get the movie</h1>
    <img className="clothing-1-image" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b96c2b7-6ff7-4ed6-b3bb-3d2793cfaed7/dgbd6it-1c9bd867-0d08-4c3d-bc14-5ba729920f09.jpg/v1/fit/w_828,h_1210,q_70,strp/forever_red_by_hylanvahr_dgbd6it-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ5NiIsInBhdGgiOiJcL2ZcLzliOTZjMmI3LTZmZjctNGVkNi1iM2JiLTNkMjc5M2NmYWVkN1wvZGdiZDZpdC0xYzliZDg2Ny0wZDA4LTRjM2QtYmMxNC01YmE3Mjk5MjBmMDkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vRgoR0xVOd4XRB6uwCaCQbMekI-PaKupAingVai4LQ4 " />
    <button className='clothing-btn'>Get Movie</button>
    </div>

    <div className="clothing-1">
    <h1>Get the movie</h1>
    <img className="clothing-1-image" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b96c2b7-6ff7-4ed6-b3bb-3d2793cfaed7/dgbd6it-1c9bd867-0d08-4c3d-bc14-5ba729920f09.jpg/v1/fit/w_828,h_1210,q_70,strp/forever_red_by_hylanvahr_dgbd6it-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ5NiIsInBhdGgiOiJcL2ZcLzliOTZjMmI3LTZmZjctNGVkNi1iM2JiLTNkMjc5M2NmYWVkN1wvZGdiZDZpdC0xYzliZDg2Ny0wZDA4LTRjM2QtYmMxNC01YmE3Mjk5MjBmMDkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vRgoR0xVOd4XRB6uwCaCQbMekI-PaKupAingVai4LQ4 " />
    <button className='clothing-btn'>Get Movie</button>
    </div>
</div>
  </div>
  <br/>
  <h1 class="uk-heading-small uk-heading-bullet">Best Sellers in Clothing, shoes and jeweries</h1>
 <div className="bestSellers" >
 <img className='sellers' src=" https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b96c2b7-6ff7-4ed6-b3bb-3d2793cfaed7/dgbpkuq-7ba207b2-0f1d-4f88-b409-effea2812e83.jpg/v1/fit/w_828,h_1060,q_70,strp/an_angel_for_the_holy_land_by_hylanvahr_dgbpkuq-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMxMiIsInBhdGgiOiJcL2ZcLzliOTZjMmI3LTZmZjctNGVkNi1iM2JiLTNkMjc5M2NmYWVkN1wvZGdicGt1cS03YmEyMDdiMi0wZjFkLTRmODgtYjQwOS1lZmZlYTI4MTJlODMuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5N8YScgnEsymB9-pnmNA3VVpgGTG2eEbyAmM7TlaxMs" />
 <img className='sellers' src=" https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b96c2b7-6ff7-4ed6-b3bb-3d2793cfaed7/dgdhqcg-7bfc29c2-8498-4758-8640-fe61123f9f22.jpg/v1/fit/w_828,h_1210,q_70,strp/scryer__the_hand_of_thoth_by_hylanvahr_dgdhqcg-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ5NiIsInBhdGgiOiJcL2ZcLzliOTZjMmI3LTZmZjctNGVkNi1iM2JiLTNkMjc5M2NmYWVkN1wvZGdkaHFjZy03YmZjMjljMi04NDk4LTQ3NTgtODY0MC1mZTYxMTIzZjlmMjIuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6bj7ojjKTjv7IR9t5x78OA2-G92qWBStYY6VIhnxtRw" />
 <img className="sellers" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b96c2b7-6ff7-4ed6-b3bb-3d2793cfaed7/dgbd6it-1c9bd867-0d08-4c3d-bc14-5ba729920f09.jpg/v1/fit/w_828,h_1210,q_70,strp/forever_red_by_hylanvahr_dgbd6it-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ5NiIsInBhdGgiOiJcL2ZcLzliOTZjMmI3LTZmZjctNGVkNi1iM2JiLTNkMjc5M2NmYWVkN1wvZGdiZDZpdC0xYzliZDg2Ny0wZDA4LTRjM2QtYmMxNC01YmE3Mjk5MjBmMDkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vRgoR0xVOd4XRB6uwCaCQbMekI-PaKupAingVai4LQ4 " />
 <img className="sellers" src=" " />
 <img className="sellers" src=" " />
 <img className='sellers' src=" " />
 <img className='sellers' src=" " />
 <img className='sellers' src=" " />

 </div>
 <br />
<button class="uk-button uk-button-default"><a href="" uk-totop>Back To Top</a></button>
<br/>
    </div>
  )
}

export default Home