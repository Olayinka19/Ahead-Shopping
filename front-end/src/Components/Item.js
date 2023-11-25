// import React from 'react';
// import { Link } from "react-router-dom";
// import Cart from "./Cart.js";


// function Item({item, addToCart}) {
//   return (
    
//     <div >
//       <div style={{ display: "flex", justifyContent: "center" }} class="uk-child-width-1-2@s uk-grid-match" uk-grid>
  
//     <div>
//         <div class="uk-card uk-card-secondary uk-card-hover uk-card-body uk-light">
//         <h3 class="uk-card-title"><Link to={`/items/${item.id}`}>
//         <img className='imag' src={item.image_url} alt={item.name} height={350} width={300} />
//       </Link></h3>
//       <h4>Product: {item.name}</h4>
//       <hr class="uk-divider-icon"></hr>
//       <h3>Price :${item.price}</h3>
//       <hr class="uk-divider-icon"></hr>
//       <Link to = "/Cart"><button class="uk-button uk-button-default" onClick={() => addToCart(item)}>Add to cart 🛒</button></Link>
//       <br />
//       {/* <button class="uk-button uk-button-default">Add to cart 🛒</button> */}
//       <hr class="uk-divider-icon"></hr>
//         </div>
//     </div>
// </div>
     
//     </div>
//   )
// }

// export default Item;

// Testing 

import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import StarRating from "./StarRating";



function Item({ item, addToCart, ratings, comments , reviews ,setReviews}) {
  const [feedback, setFeedback] = useState("");
  const ratingsArray = ratings || [];
  const commentsArray = comments || [];
  const handleFeedbackSubmit = () => {
    if (feedback.trim() === "") return;

    const newReview = {
      reviewer: "Anonymous",
      rating: 0,
      comment: feedback,
      item_id: item.id,
      item_name: item.name,
      item_image: item.image_url,
    };

    setReviews([...reviews, newReview]);
    setFeedback("");
  };

  return (
    <div className="ahead-items">
    <div >

    <br/>
    <br/>
     
      <div className="ahead-item-container">
      <Link to={`/items/${item.id}`}>
     <img className=" image_item" src={item.image_url} alt={item.name}  />
      </Link>

      <br/>
      <div className="">
      <h3>Category: {item.name}</h3>
      <br/>
      <h3>Price: ${item.price}</h3>
      <br/>
      {/* <button class="item-btn uk-button uk-button-primary"><a href="/Checkout"></a>Checkout</button> */}
      </div>
      <br/>
    
      
      </div>
  
    
</div>
    </div>
  );
}

export default Item;

