import React from 'react'

function Home() {
  return (
    <div>
        {/* <video src="https://yootheme.com/site/images/media/yootheme-pro.mp4" width="1800" height="1200" loop muted playsinline uk-video="autoplay: inview"></video> */}
        <div uk-slideshow="autoplay: true">
        <div class="uk-position-relative uk-visible-toggle uk-light "  tabindex="-1" uk-slideshow>

    <ul class="uk-slideshow-items">
        <li>
            <img className='slider' src="https://images.pexels.com/photos/2584279/pexels-photo-2584279.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" uk-cover />
        </li>
        <li>
            <img className='slider' src="https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" uk-cover />
        </li>
        <li>
            <img className='slider' src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" uk-cover />
        </li>
        <li>
            <img className='slider' src="https://images.pexels.com/photos/1390600/pexels-photo-1390600.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" uk-cover />
        </li>
        <li>
            <img className='slider' src="https://images.pexels.com/photos/3597932/pexels-photo-3597932.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" uk-cover />
        </li>
        <li>
            <img className='slider' src="https://images.pexels.com/photos/270288/pexels-photo-270288.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" uk-cover />
        </li>
        <li>
            <img className='slider' src="https://images.pexels.com/photos/2221879/pexels-photo-2221879.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" uk-cover />
        </li>
        <li>
            <img className='slider' src="https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" uk-cover />
        </li>
        <li>
            <img className='slider' src="https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" uk-cover />
        </li>
        <li>
            <img className='slider' src="https://images.pexels.com/photos/5585858/pexels-photo-5585858.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" uk-cover />
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>
</div>
        <hr class="uk-divider-icon"></hr>
        <div class="uk-child-width-1-2@s" uk-grid>
    <div>
    
    <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=1600" uk-img="loading: eager">
  {/* <h1>Black Leather Shoe</h1> */}
</div>

        <div class="uk-light uk-background-secondary uk-padding">
            <h3>Men's Shoe</h3>
            <p>Expertly handcrafted with precision, this black leather shoe showcases the artistry of seasoned shoemakers.</p>
            <button class="uk-button uk-button-default">Learn more
            </button>
            
            {/* <div uk-lightbox>
    <a class="uk-button uk-button-default" href="https://images.pexels.com/photos/5490218/pexels-photo-5490218.jpeg?auto=compress&cs=tinysrgb&w=800">Open Lightbox</a>
</div> */}
            
        </div>
    </div>
    <div>
        <div class="uk-dark uk-background-muted uk-padding">
    <hr class="uk-divider-icon"></hr>
    
            <h3>Women's Handbag</h3>
            <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="https://images.pexels.com/photos/3195980/pexels-photo-3195980.jpeg?auto=compress&cs=tinysrgb&w=1600" uk-img="loading: eager">
  {/* <h1>Background Image</h1> */}
</div>
            <p>Introducing our elegant women's brown handbag – a timeless accessory that exudes sophistication and style. Crafted with meticulous attention to detail, this handbag features a rich brown hue that complements any ensemble, whether for work or a night out</p>
            <button class="uk-button uk-button-primary">SHOP NOW</button>
        </div>
        
    </div>
</div> 
<hr class="uk-divider-icon"></hr>
        <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=1600" uk-img="loading: eager">
  {/* <h1>Background Image</h1> */}
</div>
<div>
        <div class="uk-light uk-background-secondary uk-padding">
            <h3>Sleek Black hat</h3>
            <p>Introducing our sleek black hat – a must-have accessory that adds a touch of chic to every look. Crafted with a keen eye for style, this hat boasts a timeless black hue that effortlessly complements any outfit, from casual to formal..</p>
            <button class="uk-button uk-button-default">Learn More</button>
        </div>
    </div>

  <hr class="uk-divider-icon"></hr>
        <div class="uk-child-width-1-2@m" uk-grid>
    <div>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://images.pexels.com/photos/17545020/pexels-photo-17545020/free-photo-of-young-woman-posing-outside-between-tree-leaves.jpeg?auto=compress&cs=tinysrgb&w=1600" width="350px" height="300px" alt="" />
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">Neck beads</h3>
                <p>Introducing our exquisite neck beads – a captivating accessory that captures the essence of elegance. Handcrafted with care, these neck beads are a celebration of culture and artistry, featuring intricate patterns and vibrant hues that effortlessly elevate your style.</p>
            </div>
        </div>
    </div>
    <hr class="uk-divider-icon"></hr>
    
    <div>
        <div class="uk-card uk-card-default">
            <div class="uk-card-body">
                <h3 class="uk-card-title">CrystalClad Glass Body Suit</h3>
                <p>Dive into the future of fashion with the revolutionary CrystalClad Glass Body Suit – a seamless blend of cutting-edge technology and artistic ingenuity that redefines the boundaries of wearable art.</p>
            </div>
            <div class="uk-card-media-bottom">
                <img src="https://images.pexels.com/photos/17549228/pexels-photo-17549228/free-photo-of-young-woman-in-a-party-dress-posing-with-her-arms-raised.jpeg?auto=compress&cs=tinysrgb&w=1600" width="350px" height="300px" alt="" />
            </div>
        </div>
    </div>
    <hr class="uk-divider-icon"></hr>
    <div class="uk-margin-small uk-card uk-card-default uk-card-body">🛍️ Unveil Your Ultimate Shopping Experience at Ahead-shopping! 🛍️.</div>
<div class="uk-margin-small uk-card uk-card-default uk-card-body">🎉 Limited-Time Offer: Shop Ahead and Save Big! 🎉.</div>
    <div class="uk-child-width-1-2@m" uk-grid>
    <div>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&w=1600" width="350" height="300" alt="" />
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">Women's Handbag!👜 </h3>
                <p>Step into a world of elegance and sophistication with Ahead Women's Handbags. Elevate your ensemble with our exquisite collection that effortlessly combines fashion and function..</p>
            </div>
        </div>
    </div>
    <hr class="uk-divider-icon"></hr>
    
    <div class="uk-margin-small uk-card uk-card-default uk-card-body">💰 Early Bird Discounts: Be the trendsetter and snag incredible discounts before everyone else does! Save big on your favorite products and enjoy the thrill of being ahead of the game.</div>
<div class="uk-margin-small uk-card uk-card-default uk-card-body">Shop ahead and receive exclusive surprise gifts with your purchases. It's our way of saying thank you for being a part of our forward-thinking community.

.</div>
    <div>
        <div class="uk-card uk-card-default">
            <div class="uk-card-body">
                <h3 class="uk-card-title">Timeless Elegance with Ahead-shopping Couture 👗 </h3>
                <p>Welcome to the world of opulence and sophistication – where style knows no bounds. Discover the essence of luxury with [Your Luxury Brand] Couture, where every stitch tells a story of exquisite craftsmanship.

.</p>
            </div>
            <div class="uk-card-media-bottom">
                <img src="https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=1600" width="350" height="300" alt="" />
            </div>
        </div>
    </div>
    <hr class="uk-divider-icon"></hr>
    
    <div class="uk-section uk-section-muted">
    <div class="uk-container">

        <h3>🛍️ Elevate Your Style</h3>

        <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
                <p>🎉 Limited-Time Exclusive: Elevate Your Glamour Game! 🎉.</p>
            </div>
            <div>
                <p>🛍️ The Epitome of Luxury: Explore a curated collection that transcends trends, offering you a range of handpicked pieces that redefine elegance.</p>
            </div>
            <div>
                <p>Follow us on social media and subscribe to our newsletter to be enchanted by upcoming collections, styling tips, and exclusive luxury offers.

</p>
            </div>
        </div>
        <hr class="uk-divider-icon"></hr>
    </div>

    <div class="uk-animation-toggle" tabindex="0">
        <div class="uk-card uk-card-default uk-card-body uk-animation-shake">
            <p class="uk-text-center">Ahead Shopping Blog</p>
        </div>
    </div>
    <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="https://images.pexels.com/photos/2881785/pexels-photo-2881785.jpeg?auto=compress&cs=tinysrgb&w=1600" uk-img="loading: eager">
  {/* <h1>Background Image</h1> */}
</div>
<div>
        <div class="uk-light uk-background-secondary uk-padding">
            <h3>Upgrade Your Wardrobe Now!</h3>
            <p>From formal occasions to casual outings, our trousers are meticulously crafted to embody sophistication.</p>
            <button class="uk-button uk-button-default">Shop Now</button>
        </div>
    </div>
    <hr class="uk-divider-icon"></hr>

    <ul uk-accordion>
    <li>
        <a class="uk-accordion-title" href="#">
🎉 Introducing Flash Sales Countdown – Unleash the Thrill of Savings! 🎉 </a>
        <div class="uk-accordion-content">
            <p>Ready for an electrifying shopping experience? Brace yourself for our exclusive Flash Sales Countdown – where the excitement is palpable, and the deals are unbeatable!.</p>
        </div>
    </li>
   
</ul>
<hr class="uk-divider-icon"></hr>
<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="https://images.pexels.com/photos/3620411/pexels-photo-3620411.jpeg?auto=compress&cs=tinysrgb&w=1600" uk-img="loading: eager">
  {/* <h1>Naija Punch News</h1> */}
</div>
<div>
        <div class="uk-light uk-background-secondary uk-padding">
            <h3>🛍️ Ankara Splendor:</h3>
            <p>Our collection showcases the essence of Nigerian Ankara, celebrating its intricate patterns and cultural significance. Choose from a range of designs that speak to your individuality.</p>
            <button class="uk-button uk-button-default">Shop Now</button>
        </div>
    </div>

    <div class="uk-margin-small uk-card uk-card-default uk-card-body">🎁 Limited-Time Deal.</div>
<div class="uk-margin-small uk-card uk-card-default uk-card-body">Wrap Yourself in Authenticity and Vibrancy! .</div>
</div>
</div>
</div>
<button class="uk-button uk-button-default"><a href="" uk-totop>Top</a></button>

    </div>
  )
}

export default Home