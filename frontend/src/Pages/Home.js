import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{justifyContent: 'center'}}>
        <video src="https://yootheme.com/site/images/media/yootheme-pro.mp4" width="1800" height="1200" loop muted playsinline uk-video="autoplay: inview"></video>
        <div uk-slideshow="autoplay: true">
        <div class="uk-position-relative uk-visible-toggle uk-light "  tabindex="-1" uk-slideshow>

    

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>

        

</div>



<hr class="uk-divider-icon"></hr>



<h1 class="uk-heading-large uk-heading-bullet">Limited-Time Offer: Shop Ahead and Save Big! 🎉</h1>

<br />

{/* <hr class="uk-divider-icon"></hr> */}
        <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=1600" uk-img="loading: eager">
  {/* <h1>Background Image</h1> */}
</div>
<div>
        <div class="uk-light uk-background-secondary uk-padding">
            <h3>Sleek Black hat</h3>
            <p>Introducing our sleek black hat – a must-have accessory that adds a touch of chic to every look. Crafted with a keen eye for style, this hat boasts a timeless black hue that effortlessly complements any outfit, from casual to formal..</p>
            <button class="uk-button uk-button-default"><Link to="/Items">Shop Now</Link></button>
        </div>
    </div>

  <hr class="uk-divider-icon"></hr>
  
  
<button class="uk-button uk-button-default"><a href="" uk-totop>Top</a></button>

    </div>
  )
}

export default Home