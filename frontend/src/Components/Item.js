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

    // Assuming you have an API endpoint to handle new feedback/reviews
    // and you're updating the reviews state after successful submission
    setReviews([...reviews, newReview]);
    setFeedback("");
  };

  return (
    <div className="Item" class="uk-card uk-card-secondary uk-card-hover uk-card-body uk-light">
    <h3 class="uk-card-title"><Link to={`/items/${item.id}`}>
         <img className='imag' src={item.image_url} alt={item.name} height={350} width={300} />
      </Link></h3>
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <StarRating rating={item.average_rating} />
      {/* <p>Ratings: {ratings.join(", ")}</p> */}
      <p>{}</p>
      <button class="uk-button uk-button-default" onClick={() => addToCart(item)}>Add to Cart</button>
      
    </div>
  );
}

export default Item;

