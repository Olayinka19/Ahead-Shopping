import React from "react";
import "./Home.css";
// import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* <video className='video' src="https://yootheme.com/site/images/media/yootheme-pro.mp4" width="1800" height="1200" loop muted playsinline uk-video="autoplay: inview"></video> */}

      {/* Slider */}
      <div
        class="uk-position-relative uk-visible-toggle uk-light"
        tabindex="-1"
        uk-slider="autoplay: true"
      >
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m">
          <li>
            <img
              className="Slide"
              src="https://img.freepik.com/free-photo/black-t-shirt-is-hanging-hanger-with-word-dope-it_1340-38184.jpg"
              alt=""
            />
            {/* <div class="uk-position-center uk-panel"><h1>1</h1></div> */}
          </li>
          <li>
            <img
              className="Slide"
              src="https://img.freepik.com/free-photo/black-shirt-with-word-ultra-it_1340-37775.jpg"
              alt=""
            />
            {/* <div class="uk-position-center uk-panel"><h1>2</h1></div> */}
          </li>
          <li>
            <img
              className="Slide"
              src="https://img.freepik.com/free-photo/red-shirt-is-box-with-red-box-background_1340-38146.jpg"
              alt=""
            />
            {/* <div class="uk-position-center uk-panel"><h1>3</h1></div> */}
          </li>
          <li>
            <img
              className="Slide"
              src="https://img.freepik.com/free-photo/fashionable-men-winter-jacket-with-zipper-close-up-generated-by-ai_188544-43270.jpg"
              alt=""
            />
            {/* <div class="uk-position-center uk-panel"><h1>4</h1></div> */}
          </li>
          <li>
            <img
              className="Slide"
              src="https://img.freepik.com/free-photo/dark-glass-bottle-with-single-liquid-drop-generative-ai_188544-9634.jpg"
              alt=""
            />
            {/* <div class="uk-position-center uk-panel"><h1>5</h1></div> */}
          </li>
          <li>
            <img
              className="Slide"
              src="https://img.freepik.com/free-photo/young-couple-embracing-autumn-nature-smiling-generated-by-ai_188544-54279.jpg"
              alt=""
            />
            {/* <div class="uk-position-center uk-panel"><h1>6</h1></div> */}
          </li>
          <li>
            <img
              className="Slide"
              src="https://img.freepik.com/free-photo/young-adults-funky-clothing-enjoying-outdoors-generated-by-ai_188544-37450.jpg"
              alt=""
            />
            {/* <div class="uk-position-center uk-panel"><h1>7</h1></div> */}
          </li>
          <li>
            <img
              className="Slide"
              src="https://img.freepik.com/free-photo/multi-ethnic-group-young-adults-smiling-generated-by-ai_24640-81233.jpg"
              alt=""
            />
            {/* <div class="uk-position-center uk-panel"><h1>8</h1></div> */}
          </li>
          <li>
            <img
              className="Slide"
              src="https://img.freepik.com/free-photo/young-adults-embrace-fashionable-city-night-generated-by-ai_188544-38888.jpg"
              alt=""
            />
            {/* <div class="uk-position-center uk-panel"><h1>9</h1></div>
        </li> 
        <li>
            {/* <img className='Slide' src="https://img.freepik.com/free-photo/two-women-are-standing-outside-store-one-them-is-wearing-green-jacket_1340-38174.jpg"  alt="" /> */}
            {/* <div class="uk-position-center uk-panel"><h1>10</h1></div> */}
          </li>
        </ul>

        {/* <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a> */}
        {/* <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a> */}
      </div>

      {/* Slider ending */}

      {/* <hr class="uk-divider-icon"></hr> */}
      <h4 class="clothing-btn uk-heading-small ">Trending Products</h4>
      <div className="Trend">
        <div className="content-1">
          <h3 className="clothing-btn">Women's dress under $100</h3>
          <div className="w-container">
            <div className="w-d-1">
              <img
                alt="amazon-img"
                src="https://m.media-amazon.com/images/I/81A8w8ndNZL._AC_UL640_FMwebp_QL65_.jpg"
                className="w-img"
              />
              {/* <a href="/Items"><h5 className='clothing-btn'>Faux Suede</h5></a> */}
            </div>
            <div className="w-d-2">
              <img
                alt="amazon-img"
                src="https://m.media-amazon.com/images/I/71vPL6iW5oL._AC_UL640_FMwebp_QL65_.jpg"
                className="w-img-2"
              />
              {/* <a href="/Items"><h5 className='clothing-btn'>Quilted Jacket</h5></a> */}
            </div>
            <div className="w-d-3">
              <img
                alt="amazon-img"
                src="https://m.media-amazon.com/images/I/810NyDjBwCL._AC_UL640_FMwebp_QL65_.jpg"
                className="w-img-2"
              />

              {/* <a href="/Items"><h5 className='clothing-btn'>Sherpa Jacket</h5></a> */}
            </div>
            <div className="w-d-4">
              <img
                alt="amazon-img"
                src="https://m.media-amazon.com/images/I/71N8jBBw3AL._AC_UL640_FMwebp_QL65_.jpg"
                className="w-img-4"
              />
              {/* <h5 className='clothing-btn h-4'><a href="/Items">Water-Resistant</a></h5> */}
            </div>
          </div>
          {/* <div>
<Link to="/Items"> <button>Shop and Save</button> </Link>
</div> */}
        </div>

        <div className="content-2">
          <figure>
            <h3 className="clothing-btn">Fall Dress Under $60</h3>
            <img
              alt="fall-dress"
              className="img-cont"
              src="https://img.freepik.com/free-photo/portrait-smiling-man-snow_23-2150771181.jpg"
            />
            <div>
              <div className="clothing-btn deal">Up to 50% off</div>
            </div>
            <p className="clothing-btn">
              Product is such an amazing item, tested and trusted
            </p>
            {/* <br/> */}
            {/* <br/> */}
            <figcaption>
              <button class="clothing-btn uk-button uk-button-link">
                <a className="a-off" href="/Items">
                  See all deals
                </a>
              </button>
            </figcaption>
          </figure>
        </div>
        <div className="content-3">
          <h4 className="clothing-btn">Top Deal</h4>

          <img
            alt="falldress"
            className="img-cont-3"
            src="https://img.freepik.com/free-photo/woven-wool-cardigan-sweater-multi-colored-pattern-generated-by-ai_188544-37136.jpg"
          />
          <div>
            <div className="clothing-btn deal">Up to 50% off</div>
          </div>
          <p>Product is such an amazing item, tested and trusted</p>
          <br />
          <br />
          <button class="uk-button uk-button-default">
            <a className="a-off" href="/Items">
              See all deals
            </a>
          </button>
        </div>
      </div>
      <h4 class="clothing-btn uk-heading-small ">Fall Dresses Under $60</h4>
      <div className="second-container">
        <div className="sub-cont">
          <img
            alt="amazon-img"
            className="img-cont"
            src="https://img.freepik.com/premium-photo/shot-young-man-woman-standing-together-cold-weather_762026-73225.jpg"
          />
          <div>
            <div className="clothing-btn deal">Up to 50% off</div>
          </div>

          <p className="clothing-btn">
            Product is such an amazing item, tested and trusted
          </p>
          <br />
          <br />
          <button class="uk-button uk-button-warning">
            <a className="a-off" href="/Items">
              See all deals
            </a>
          </button>
        </div>

        <div className="sub-cont-2">
          <h5 className="clothing-btn">Fall Favorite Fashion</h5>
          <div className="w-container">
            <div className="w-d-1">
              <img
                alt="amazon-img"
                src="https://m.media-amazon.com/images/I/71owDjjbaeL._AC_UL640_FMwebp_QL65_.jpg"
                className="w-img"
              />
              {/* <a href="/Items"><h5 className='clothing-btn'>Jacket</h5></a> */}
            </div>
            <div className="w-d-2">
              <img
                alt="amazon-img"
                src="https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600"
                className="w-img-2"
              />
              {/* <a href="/Items"><h5 className='clothing-btn'>Hoodie</h5></a> */}
            </div>
            <div className="w-d-3">
              <img
                alt="amazon-img"
                src="https://m.media-amazon.com/images/I/61YCt73E3sL._AC_UL640_FMwebp_QL65_.jpg"
                className="w-img-2"
              />

              {/* <a href="/Items"><h5 className='clothing-btn'>Sweaters</h5></a> */}
            </div>
            <div className="w-d-4">
              <img
                alt="amazon-img"
                src="https://images.pexels.com/photos/1761683/pexels-photo-1761683.jpeg?auto=compress&cs=tinysrgb&w=1600"
                className="w-img-4"
              />
              {/* <h5 className='clothing-btn h-4'><a href="/Items">Head-scaff</a></h5> */}
            </div>
          </div>
        </div>
        <div className="clothing-btn sub-cont-3">
          Men's deals Under $40
          <div className="w-container">
            <div className="w-d-1">
              <img
                alt="amazon-img"
                src="https://m.media-amazon.com/images/I/81c502BwSDL._AC_UL640_FMwebp_QL65_.jpg"
                className="w-img"
              />
              {/* <a href="/Items"><h5 className='clothing-btn'>Water-Resistant</h5></a> */}
            </div>
            <div className="w-d-2">
              <img
                alt="amazon-img"
                src="https://m.media-amazon.com/images/I/71BUr7zXEJL._AC_UL640_FMwebp_QL65_.jpg"
                className="w-img-2"
              />
              {/* <a href="/Items"><h5 className='clothing-btn'>Tactical Jacket</h5></a> */}
            </div>
            <div className="w-d-3">
              <img
                alt="amazon-img"
                src="https://m.media-amazon.com/images/I/81IEG8E82wL._AC_UL640_FMwebp_QL65_.jpg"
                className="w-img-2"
              />

              {/* <a href="/Items"><h5 className='clothing-btn'>Golf Jacket</h5></a> */}
            </div>
            <div className="w-d-4">
              <img
                alt="amazon-img"
                src="https://m.media-amazon.com/images/I/71zT0tJ2CjL._AC_UL640_FMwebp_QL65_.jpg"
                className="w-img-4"
              />
              {/* <h5 className= 'clothing-btn h-4'><a href="/Items">Thermal Jacket</a></h5> */}
            </div>
          </div>
        </div>
      </div>

      <div uk-slider="autoplay: true">
        <div
          class="uk-position-relative uk-visible-toggle uk-light"
          tabindex="-1"
          uk-slider
        >
          <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
            <li>
              <img
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/81b724fa419569fb2d2be18e7d368291.jpg?imageView2/2/w/800/q/70/format/webp"
                className="imag"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>1</h1>
              </div>
            </li>
            <li>
              <img
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/95363959a8937b7ce4f79fbaff76b110.jpg?imageView2/2/w/800/q/70/format/webp"
                className="imag"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>2</h1>
              </div>
            </li>
            <li>
              <img
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8e08eea04a5b73e8f7baa594017ff542.jpg?imageView2/2/w/800/q/70/format/webp"
                className="imag"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>3</h1>
              </div>
            </li>
            <li>
              <img
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/01241c3fb2980fffb2c4363ed4cc9ee7.jpg?imageView2/2/w/800/q/70/format/webp"
                className="imag"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>4</h1>
              </div>
            </li>
            <li>
              <img
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/cd0c4b460808171d67c34f2cbd93d94b.jpg?imageView2/2/w/800/q/70/format/webp"
                className="imag"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>5</h1>
              </div>
            </li>
            <li>
              <img
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/b62946d2db73e73bd3efa94e89b18849.jpg?imageView2/2/w/800/q/70/format/webp"
                className="imag"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>6</h1>
              </div>
            </li>
            <li>
              <img
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/ee24713b1b0ce238fec971aa91910e7e.jpg?imageView2/2/w/800/q/70/format/webp"
                className="imag"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>7</h1>
              </div>
            </li>
            <li>
              <img
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/ab34676b4e58cdf36a983c1133b9e63b.jpg?imageView2/2/w/800/q/70/format/webp"
                className="imag"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>8</h1>
              </div>
            </li>
            <li>
              <img
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/c3233a685d4ceb7e7266bf7a46254f2d.jpg?imageView2/2/w/800/q/70/format/webp"
                className="imag"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>9</h1>
              </div>
            </li>
            <li>
              <img
                className="imag"
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/09abf0f28ca19d41ef50109159829bde.jpg?imageView2/2/w/800/q/70/format/webp"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>10</h1>
              </div>
            </li>
          </ul>

          {/* <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a> */}
          {/* <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a> */}
        </div>
      </div>
      <br />
      <br />
      <br />

      <h1 class="clothing-btn uk-heading-small ">
        Limited-Time Offer: Shop Ahead and Save Big!
      </h1>
      {/* <div className='trending-container'>
<div className=''>

 <img alt="amazon-img" className='semi1-img'  src="https://m.media-amazon.com/images/I/71CX6OXqbLL._AC_UL640_FMwebp_QL65_.jpg" />
 <br/>
<button class=" btn uk-button uk-button-default">Buy Now</button>

</div>
<figure>
<img alt="amazon-img" className='semi1-img'  src="https://m.media-amazon.com/images/I/71CX6OXqbLL._AC_UL640_FMwebp_QL65_.jpg" />
    <figcaption>
    <button class=" btn uk-button uk-button-default">Add To Cart</button>
 
    </figcaption>
</figure>
<div className=''>
<img alt="amazon-img" className='semi1-img' src="https://m.media-amazon.com/images/I/61IvqTyrR8S._AC_UL640_FMwebp_QL65_.jpg" />
<br/>
<button class=" btn first-line:uk-button uk-button-default">Buy Now</button>
</div>
<div className=''>
<img alt="amazon-img" className='semi1-img' src="https://m.media-amazon.com/images/I/61XyfyFMxbL._AC_UL640_FMwebp_QL65_.jpg" />
<br/>
<button class="btn uk-button uk-button-default">Buy Now</button>
</div>


</div> */}

      <div className="semi-cont">
        <div className="semi-1">
          <img
            alt="amazon-img"
            className="semi1-img"
            src="https://m.media-amazon.com/images/I/610WM+-SQBL._AC_UY436_QL65_.jpg"
          />
          <br />
          <button class="btn uk-button uk-button-default">Buy Now</button>
        </div>

        <div className="semi-3">
          <img
            alt="amazon-img"
            className="semi1-img"
            src="https://m.media-amazon.com/images/I/6181N8ZKgtL._AC_UY436_QL65_.jpg"
          />
          <br />
          <button class="btn uk-button uk-button-default">Buy Now</button>
        </div>
        <div className="semi-4">
          <img
            alt="amazon-img"
            className="semi1-img"
            src="https://m.media-amazon.com/images/I/61kLRcroWtL._AC_UY436_QL65_.jpg"
          />
          <br />
          <button class="btn uk-button uk-button-default">Buy Now</button>
        </div>
      </div>

      <br />
      <br />

      <br />
      <div uk-slider="autoplay: true">
        <div
          class="uk-position-relative uk-visible-toggle uk-light"
          tabindex="-1"
          uk-slider
        >
          <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
            <li>
              <img
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/81b724fa419569fb2d2be18e7d368291.jpg?imageView2/2/w/800/q/70/format/webp"
                className="imag"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>1</h1>
              </div>
            </li>
            <li>
              <img
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/95363959a8937b7ce4f79fbaff76b110.jpg?imageView2/2/w/800/q/70/format/webp"
                className="imag"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>2</h1>
              </div>
            </li>
            <li>
              <img
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8e08eea04a5b73e8f7baa594017ff542.jpg?imageView2/2/w/800/q/70/format/webp"
                className="imag"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>3</h1>
              </div>
            </li>
            <li>
              <img
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/01241c3fb2980fffb2c4363ed4cc9ee7.jpg?imageView2/2/w/800/q/70/format/webp"
                className="imag"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>4</h1>
              </div>
            </li>
            <li>
              <img
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/cd0c4b460808171d67c34f2cbd93d94b.jpg?imageView2/2/w/800/q/70/format/webp"
                className="imag"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>5</h1>
              </div>
            </li>
            <li>
              <img
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/b62946d2db73e73bd3efa94e89b18849.jpg?imageView2/2/w/800/q/70/format/webp"
                className="imag"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>6</h1>
              </div>
            </li>
            <li>
              <img
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/ee24713b1b0ce238fec971aa91910e7e.jpg?imageView2/2/w/800/q/70/format/webp"
                className="imag"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>7</h1>
              </div>
            </li>
            <li>
              <img
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/ab34676b4e58cdf36a983c1133b9e63b.jpg?imageView2/2/w/800/q/70/format/webp"
                className="imag"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>8</h1>
              </div>
            </li>
            <li>
              <img
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/c3233a685d4ceb7e7266bf7a46254f2d.jpg?imageView2/2/w/800/q/70/format/webp"
                className="imag"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>9</h1>
              </div>
            </li>
            <li>
              <img
                className="imag"
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/09abf0f28ca19d41ef50109159829bde.jpg?imageView2/2/w/800/q/70/format/webp"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>10</h1>
              </div>
            </li>
          </ul>

          {/* <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a> */}
          {/* <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a> */}
        </div>
      </div>

      {/* <hr class="uk-divider-icon"></hr> */}

      <h1 class="clothing-btn uk-heading-small ">
        Best Sellers in Grocery & Food
      </h1>

      {/* <div className="bestSellers" >
  <img className='sellers' src=" https://m.media-amazon.com/images/I/71DhrQk0BXL._SX679_PIbundle-10,TopRight,0,0_SX679SY541SH20_.jpg" />
 <img className='sellers' src=" https://m.media-amazon.com/images/I/819nEBi+uIL._AC_UL640_FMwebp_QL65_.jpg" />
 <img className="sellers" src="https://m.media-amazon.com/images/I/81FJ6bkzhxL._AC_UL640_FMwebp_QL65_.jpg " />
 <img className="sellers" src="https://m.media-amazon.com/images/I/917mQRphu5L._AC_UL640_FMwebp_QL65_.jpg " />
 <img className="sellers" src=" https://m.media-amazon.com/images/I/71B7nJt7KqL._AC_UL640_FMwebp_QL65_.jpg" />
 <img className='sellers' src="https://m.media-amazon.com/images/I/716K7XEhiqL._AC_UL640_FMwebp_QL65_.jpg " />
 <img className='sellers' src="https://m.media-amazon.com/images/I/71Ib0KQ26nL._AC_UL640_FMwebp_QL65_.jpg " />
 <img className='sellers' src="https://m.media-amazon.com/images/I/81MAeXwh79L._AC_UL640_FMwebp_QL65_.jpg " />


 </div> */}

      <br />
      <h1 class="h-1 uk-heading-small ">Ahead Live | Store Streams</h1>
      {/* <div className="ahead-live">
      
        <a href="https://www.amazon.com/NBCUniversal-Media-LLC-NBC-Sports/dp/B01923M8T6/ref=sr_1_31?crid=153DNHBP5GHXU&keywords=sports+streaming&qid=1698547515&sprefix=sports+streaming%2Caps%2C115&sr=8-31">
          <img
            className="ahead-live-sellers"
            src="https://m.media-amazon.com/images/I/51heoqzIRkL._AC_UY436_FMwebp_QL65_.png "
          />
        </a>

        <img
          alt="amazon-img"
          className="ahead-live-sellers"
          src="https://m.media-amazon.com/images/I/714AjbU333L._AC_UY436_FMwebp_QL65_.jpg "
        />
        <img
          alt="amazon-img"
          className="ahead-live-sellers"
          src="https://m.media-amazon.com/images/I/81mJZ01VVtL._AC_UY436_FMwebp_QL65_.jpg "
        />
        <img
          alt="amazon-img"
          className="ahead-live-sellers"
          src="https://m.media-amazon.com/images/I/816YjfPUoaL._AC_UY436_QL65_.jpg "
        />
      </div> */}

      <br />
      <h1 class="h-1 uk-heading-small ">Best Sellers in Books</h1>
      {/* <div className="books">
        <div
          class="uk-position-relative uk-visible-toggle uk-light"
          tabindex="-1"
          uk-slider
        >
          <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
            <li>
              <img
                src="https://m.media-amazon.com/images/I/61wH9jGaI8L._SY522_.jpg"
                width="400"
                height="400"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>1</h1>
              </div>
            </li>
            <li>
              <img
                src="https://m.media-amazon.com/images/I/41vt+u8zb4L._SY445_SX342_.jpg"
                width="400"
                height="400"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>2</h1>
              </div>
            </li>
            <li>
              <img
                src="https://m.media-amazon.com/images/I/516xTKZATSL._SY445_SX342_.jpg"
                width="400"
                height="400"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>3</h1>
              </div>
            </li>
            <li>
              <img
                src="https://m.media-amazon.com/images/I/51Y1zZbGcGL._SY445_SX342_.jpg"
                width="400"
                height="400"
                alt=""
              />
              <div class="uk-position-center uk-panel">
                <h1>4</h1>
              </div>
            </li>
          </ul>
        </div>
        <br />

        <h1 class="h-1 uk-heading-small ">Best Sellers in Movies</h1>
       
        <br />
        <br />
        <br />
      </div> */}
      <br />
      <video
          className="video"
          src="https://yootheme.com/site/images/media/yootheme-pro.mp4"
          width="1800"
          height="1200"
          loop
          muted
          playsinline
          uk-video="autoplay: inview"
        ></video>
      <h1 class="h-1 uk-heading-small ">
        Best Sellers in Clothing, shoes and jeweries
      </h1>
      {/* <div className="bestSellers" >
 <img className='sellers' src=" https://m.media-amazon.com/images/I/71PrNGakKkL._AC_UL640_FMwebp_QL65_.jpg" />
 <img className='sellers' src=" https://m.media-amazon.com/images/I/71MW74qH8dL._AC_UL640_FMwebp_QL65_.jpg" />
 <img className="sellers" src="https://m.media-amazon.com/images/I/61LGoXPTs+L._AC_UL640_FMwebp_QL65_.jpg" />
 <img className="sellers" src="https://m.media-amazon.com/images/I/51rpwE8hFOL._AC_UL640_FMwebp_QL65_.jpg " />
 <img className="sellers" src=" https://m.media-amazon.com/images/I/71Eff15EiGL._AC_UL640_FMwebp_QL65_.jpg" />
 <img className='sellers' src="https://m.media-amazon.com/images/I/618zcfCdPJL._AC_SX679_.jpg " />
 <img className='sellers' src="https://m.media-amazon.com/images/I/41qCPkU6f8L._AC_SR160,160_.jpg " />
 <img className='sellers' src=" https://m.media-amazon.com/images/I/51zr-4-WhYL._AC_SR480,480_.jpg" />

 </div> */}
      <br />
      <div className="base">
        <div className="container-base">
          <div className="base1">
            <div className="base01">
              {/* <marquee direction="up"><h1 class="clothing-btn uk-heading-small">50% off!</h1></marquee> */}
            </div>
          </div>
          <div className="base02">
            <img
              alt="amazon-img"
              class="img_base02"
              src=" https://m.media-amazon.com/images/I/51zr-4-WhYL._AC_SR480,480_.jpg"
            />
          </div>
          <div className="base03">
            
          </div>
        </div>

        {/* <div className="sub-cont-2">
          <h5 className="clothing-btn">Fall Favorite Fashion</h5>
          <div className="w-container">
            <div className="w-d-1">
              <img
                alt="amazon-img"
                src="https://m.media-amazon.com/images/I/71owDjjbaeL._AC_UL640_FMwebp_QL65_.jpg"
                className="w-img"
              />
              <a href="/Items">
                <h5 className="clothing-btn">Jacket</h5>
              </a>
            </div>
            <div className="w-d-2">
              <img
                alt="amazon-img"
                src="https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600"
                className="w-img-2"
              />
              
            </div>
            <div className="w-d-3">
              <img
                alt="amazon-img"
                src="https://m.media-amazon.com/images/I/61YCt73E3sL._AC_UL640_FMwebp_QL65_.jpg"
                className="w-img-2"
              />

              <a href="/Items">
                <h5 className="clothing-btn">Sweaters</h5>
              </a>
            </div>
            <div className="w-d-4">
              <img
                alt="amazon-img"
                src="https://images.pexels.com/photos/1761683/pexels-photo-1761683.jpeg?auto=compress&cs=tinysrgb&w=1600"
                className="w-img-4"
              />
              <h5 className="clothing-btn h-4">
                <a href="/Items">Head-scaff</a>
              </h5>
            </div>
          </div>
        </div> */}
        {/* <div  className="container-base">
 <div className="base22">

</div>
 <div className="base22">

</div>
 <div className="base22">

</div>

 </div> */}
        {/* <div className="container-base">
 <div className="base22">

</div>
 <div className="base22">

</div>
 <div className="base22">

</div>
    
 </div> */}
        {/* <div className="container-base"></div> */}
        {/* <div className="container-base">
 <div className="base1">
        <div className="base01">
<img src="" />
        </div>
        
    </div>
    <div className="base02">
    <img class="img_base02" src=" https://m.media-amazon.com/images/I/51zr-4-WhYL._AC_SR480,480_.jpg" />

        </div>
        <div className="base03">

</div>
 </div> */}
        {/* <div className="content-2">
          <h3 className="clothing-btn">Fall Dress Under $60</h3>
          <img
            alt="amazon-img"
            className="img-cont"
            src="https://img.freepik.com/free-photo/portrait-smiling-man-snow_23-2150771181.jpg"
          />
          <div>
            <div className="clothing-btn deal">Up to 50% off</div>
          </div>
          <p className="clothing-btn">
            Product is such an amazing item, tested and trusted
          </p>
          <br />
          <br />
          <button class="clothing-btn uk-button uk-button-link">
            <a className="a-off" href="/Items">
              See all deals
            </a>
          </button>
        </div> */}
      </div>
      <br />
      <button class="uk-button uk-button-default">
        <a href="" uk-totop>
          Back To Top
        </a>
      </button>
      {/* <br/> */}
      {/* <br/> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Home;
